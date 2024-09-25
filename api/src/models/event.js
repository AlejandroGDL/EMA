const mongoose = require('mongoose');
const User = require('./user');
const fs = require('fs');

const EventSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  DateandHour: {
    type: Date,
    required: true,
  },
  Duration: {
    type: Number,
    required: true,
  },
  Place: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
  },
  EndDateHour: {
    type: Date,
    required: true,
  },
  IsActive: {
    type: Boolean,
    default: false,
  },
  Assistance: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

class EventRepo {
  // Crear un evento
  static async create({ Title, DateandHour, Duration, Place, Image }) {
    const EventModel = mongoose.model('Event', EventSchema);

    //Validaciones
    Validations(Title, DateandHour, Duration, Place);

    //Evitar solapamiento de eventos
    const EndDateHour = await isOverlappingEvent(DateandHour, Duration);

    //Renombrar imagen y extraer la nueva ruta
    const NewPath = renameImage(Image);

    //Crear el evento
    const Event = await EventModel.create({
      Title,
      DateandHour: new Date(DateandHour),
      Duration,
      Place,
      Image: NewPath,
      EndDateHour,
    });

    return Event;
  }
  // Buscar un evento
  static async findOne({ EventID }) {
    const EventModel = mongoose.model('Event', EventSchema);

    //Buscar el evento por ID
    const event = await EventModel.findOne({ _id: EventID });

    return event;
  }
  // Buscar todos los eventos
  static async find() {
    const EventModel = mongoose.model('Event', EventSchema);

    // Buscar todos los eventos
    const events = await EventModel.find();

    // Filtrar eventos que no sean de una fecha pasada
    const currentDate = new Date();
    const filteredEvents = events.filter(
      (event) => event.DateandHour > currentDate
    );

    return filteredEvents;
  }
  // Eliminar un evento
  static async delete({ EventID }) {
    const EventModel = mongoose.model('Event', EventSchema);

    // Validar que el evento existe
    await eventExistence(EventID);

    // Buscar el evento por ID
    const event = await EventModel.findOne({ _id: EventID });

    // Eliminar la imagen
    if (event && event.Image) {
      fs.unlink(event.Image, (err) => {
        if (err) {
          console.error(err);
        }
      });
    }

    // Eliminar el evento por ID
    await EventModel.deleteOne({ _id: EventID });

    return event;
  }
  // Actualizar un evento
  static async update({ EventID, Title, DateandHour, Duration, Place }) {
    const EventModel = mongoose.model('Event', EventSchema);

    // Validar que el evento existe
    await eventExistence(EventID);

    // Validaciones
    Validations(Title, DateandHour, Duration, Place);

    // Validar que no se solapen eventos
    const EndDateHour = await isOverlappingUpdateEvent(
      EventID,
      DateandHour,
      Duration
    );

    // Buscar el evento por ID
    // const event = await EventModel.findOne({ _id: EventID });

    // // Eliminar la imagen anterior
    // if (event && event.Image) {
    //   fs.unlink(event.Image, (err) => {
    //     if (err) {
    //       console.error(err);
    //     }
    //   });
    // }

    //const NewPath = renameImage(Image);

    //Crear el evento
    const updateEvent = await EventModel.findByIdAndUpdate(
      { _id: EventID },
      {
        Title,
        DateandHour: new Date(DateandHour),
        Duration,
        Place,
        EndDateHour,
      },
      { new: true }
    );

    return updateEvent;
  }
  // Registrar asistencia a un evento
  static async register({ StudentID }) {
    //Buscar el evento activo
    const activeEvent = await findActive();

    if (!activeEvent) {
      console.error('No hay eventos activos');
      throw new Error('No hay eventos activos');
    }

    //Buscar el usuario por ID
    const user = await User.findOne({ StudentID });
    if (!user) {
      console.error('El usuario no existe');
      throw new Error('El usuario no existe');
    }

    //Validar que el usuario no haya asistido previamente
    if (activeEvent.Assistance.includes(user._id)) {
      console.error('El usuario ya asistió a este evento');
      throw new Error('El usuario ya asistió a este evento');
    }

    //Registrar asistencia
    activeEvent.Assistance.push(user._id);
    await activeEvent.save();

    user.StudentHours += activeEvent.Duration;
    user.AssistedEvents.push(activeEvent._id);
    await user.save();

    return activeEvent;
  }
}

// Solapamiento de eventos
async function isOverlappingEvent(DateandHour, Duration) {
  const EventModel = mongoose.model('Event', EventSchema);

  // Convertir la cadena a tipo date
  const DateHour = new Date(DateandHour);
  // Convertir la duración a milisegundos
  const DurationMilliseconds = Duration * 60 * 1000;
  // Calcular la hora de finalización del evento
  const EndDateHour = new Date(DateHour.getTime() + DurationMilliseconds);

  // Validar que no se solapen eventos
  const isOverlapping = await EventModel.findOne({
    $or: [
      {
        DateandHour: { $lt: EndDateHour },
        EndDateHour: { $gt: DateHour },
      },
    ],
  });

  if (isOverlapping) {
    console.error('El evento se solapa con otro evento existente');
    throw new Error('El evento se solapa con otro evento existente');
  }

  return EndDateHour;
}

// Solapamiento de eventos actualizado
async function isOverlappingUpdateEvent(EventID, DateandHour, Duration) {
  const EventModel = mongoose.model('Event', EventSchema);

  // Convertir la cadena a tipo date
  const DateHour = new Date(DateandHour);
  // Convertir la duración a milisegundos
  const DurationMilliseconds = Duration * 60 * 1000;
  // Calcular la hora de finalización del evento
  const EndDateHour = new Date(DateHour.getTime() + DurationMilliseconds);

  // Validar que no se solapen eventos, ignorando el evento con el ID proporcionado
  const isOverlapping = await EventModel.findOne({
    _id: { $ne: EventID },
    $or: [
      {
        DateandHour: { $lt: EndDateHour },
        EndDateHour: { $gt: DateHour },
      },
    ],
  });

  if (isOverlapping) {
    console.error('El evento se solapa con otro evento existente');
    throw new Error('El evento se solapa con otro evento existente');
  }

  return EndDateHour;
}

// Validar que el evento existe
async function eventExistence(EventID) {
  const EventModel = mongoose.model('Event', EventSchema);

  //Buscar el evento por ID
  const event = await EventModel.findOne({ _id: EventID });
  //Validar que el evento existe
  if (!event) {
    console.error('El evento no existe');
    throw new Error('El evento no existe');
  }
}

// Buscar el evento activo
async function findActive() {
  const EventModel = mongoose.model('Event', EventSchema);

  //Buscar el evento activo
  const event = await EventModel.findOne({ IsActive: true });

  return event;
}

// Validaciones
function Validations(Title, DateandHour, Duration, Place) {
  //Validar que todos los campos estén presentes
  if (!Title) {
    console.error('El titúlo es requerido');
    throw new Error('El titúlo es requerido');
  }
  if (!DateandHour) {
    console.error('La fecha es requerida');
    throw new Error('La fecha es requerida');
  }
  if (!Duration) {
    console.error('La duración es requerida');
    throw new Error('La duración es requerida');
  }
  if (!Place) {
    console.error('El lugar es requerido');
    throw new Error('El lugar es requerido');
  }
  // Validar que la duración no sea negativa
  if (Duration <= 0) {
    console.error('La duración no puede ser negativa');
    throw new Error('La duración no puede ser negativa');
  }
  // Validar que la fecha no sea anterior a la actual
  if (new Date(DateandHour) < new Date()) {
    console.error('La fecha no puede ser anterior a la actual');
    throw new Error('La fecha no puede ser anterior a la actual');
  }
  // Validar que el título y el lugar sean strings
  if (typeof Title !== 'string' || typeof Place !== 'string') {
    console.error('El título, el lugar deben ser strings');
    throw new Error('El título, el lugar deben ser strings');
  }
}

// Renombrar la imagen
function renameImage(file) {
  const oldPath = file.path;
  const newFileName = `${Date.now()}_${file.originalname}`;
  const newPath = `public/uploads/${newFileName}`;
  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      console.error(err);
    }
  });
  return newFileName;
}

module.exports = EventRepo;
