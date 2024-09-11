const mongoose = require('mongoose');

const User = require('./user');

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
    type: Buffer,
    contentType: String,
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

    //Crear el evento
    const Event = await EventModel.create({
      Title,
      DateandHour: new Date(DateandHour),
      Duration,
      Place,
      Image: Image.buffer,
      contentType: Image.mimetype,
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

    //Buscar todos los eventos
    const events = await EventModel.find();

    return events;
  }
  // Eliminar un evento
  static async delete({ EventID }) {
    const EventModel = mongoose.model('Event', EventSchema);

    // Validar que el evento existe
    eventExistence(EventID);

    //Eliminar el evento por ID
    const event = await EventModel.deleteOne({ _id: EventID });

    return event;
  }
  // Actualizar un evento
  static async update({ EventID, Title, DateandHour, Duration, Place, Image }) {
    const EventModel = mongoose.model('Event', EventSchema);
    // Validar que el evento existe
    eventExistence(EventID);

    // Validaciones
    Validations(Title, DateandHour, Duration, Place);

    // Validar que no se solapen eventos
    const EndDateHour = await isOverlappingEvent(DateandHour, Duration);

    //Crear el evento
    const updateEvent = await EventModel.findByIdAndUpdate(
      { _id: EventID },
      {
        Title,
        DateandHour: new Date(DateandHour),
        Duration,
        Place,
        Image: Image.buffer,
        contentType: Image.mimetype,
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
  if (!Title || !DateandHour || !Duration || !Place) {
    console.error('Todos los campos son requeridos');
    throw new Error('Todos los campos son requeridos');
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

module.exports = EventRepo;
