const EventRepo = require('../models/event');

//Controlador para obtener un evento
const getEvent = async (req, res) => {
  const { EventID } = req.params;

  try {
    const event = await EventRepo.findOne({ EventID });
    res.json(event);
  } catch (error) {
    res.json('Error al encontrar el evento', error.message);
  }
};

//Controlador para crear un evento
const createEvent = async (req, res) => {
  const { Title, DateandHour, Duration, Place } = req.body;
  const Image = req.file;

  try {
    await EventRepo.create({
      Title,
      DateandHour,
      Duration,
      Place,
      Image,
    });
    res.json('Evento creado exitosamente');
  } catch (error) {
    res.json(error.message);
  }
};

//Controlador para obtener todos los eventos
const getEvents = async (req, res) => {
  try {
    const events = await EventRepo.find();
    res.json(events);
  } catch (error) {
    res.json('Error al encontrar los eventos', error.message);
  }
};

//Controlador para actualizar un evento
const updateEvent = async (req, res) => {
  const { EventID } = req.params;
  const { Title, DateandHour, Duration, Place } = req.body;

  try {
    await EventRepo.update({
      EventID,
      Title,
      DateandHour,
      Duration,
      Place,
    });
    res.json('Evento actualizado');
  } catch (error) {
    res.json({
      message: 'Error al actualizar el evento',
      error: error.message,
    });
  }
};

//Controlador para eliminar un evento
const deleteEvent = async (req, res) => {
  const { EventID } = req.params;

  //Elimina el evento
  try {
    await EventRepo.delete({ EventID });
    res.json('Evento eliminado exitosamente');
  } catch (error) {
    res.json('Error al eliminar el evento', error.message);
  }
};

//Controlador para obtener el evento activo
const registerattendance = async (req, res) => {
  const { StudentID } = req.params;

  try {
    const activeEvent = await EventRepo.register({ StudentID });
    res.json(activeEvent);
  } catch (error) {
    res.json('Error al registrarte al evento', error.message);
  }
};

module.exports = {
  getEvent,
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent,
  registerattendance,
};
