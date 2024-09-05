const UserRepo = require('../models/user');

//Controlador para crear un usuario
const createUser = async (req, res) => {
  const {
    StudentName,
    StudentLastName,
    StudentID,
    StudentPassword,
    StudentImage,
    StudentInfo,
    AssitedEvents,
  } = req.body;

  try {
    const savedUser = await UserRepo.create({
      StudentName,
      StudentLastName,
      StudentID,
      StudentPassword,
      StudentImage,
      StudentInfo,
      AssitedEvents,
    });
    res.json(savedUser);
  } catch (error) {
    res.json(error.message);
  }
};

//Controlador para obtener un usuario
const getUser = async (req, res) => {
  const { StudentID } = req.params;

  try {
    const user = await UserRepo.findOne({ StudentID });

    if (!user) {
      res.json('Usuario no encontrado');
      return;
    }

    res.json(user);
  } catch (error) {
    res.json('Error al encontrar el estudiante', error.message);
  }
};

//Controlador para loguear un usuario
const loginUser = async (req, res) => {
  const { StudentID, StudentPassword } = req.body;

  try {
    const user = await UserRepo.login({ StudentID, StudentPassword });

    res.json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { createUser, getUser, loginUser };
