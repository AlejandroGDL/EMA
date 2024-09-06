const express = require('express');
const router = express.Router();
const eventController = require('../controllers/event');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

//Obtener todos los eventos
router.get('/events', eventController.getEvents);
//Obtener un evento
router.get('/event/:EventID', eventController.getEvent);
//Crear eventos
router.post('/event', upload.single('Image'), eventController.createEvent);
//Actualizar eventos
router.put(
  '/event/:EventID',
  upload.single('Image'),
  eventController.updateEvent
);
//Eliminar eventos
router.delete('/event/:EventID', eventController.deleteEvent);
//Registrar asistencia a un evento
router.post('/registerevent/:StudentID', eventController.registerattendance);

module.exports = router;
