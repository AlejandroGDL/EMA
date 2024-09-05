const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

//Obtener usuarios
router.get('/user/:StudentID', userController.getUser);
//Crear usuarios
router.post('/user', userController.createUser);
//Login
router.post('/login', userController.loginUser);

module.exports = router;
