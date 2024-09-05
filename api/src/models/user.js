const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  StudentName: {
    type: String,
    required: true,
  },
  StudentLastName: {
    type: String,
    required: true,
  },
  StudentID: {
    type: Number,
    required: true,
  },
  StudentPassword: {
    type: String,
    required: true,
  },
  StudentImage: {
    type: String,
    required: true,
  },
  StudentInfo: {
    type: Object,
    required: true,
  },
  AssitedEvents: {
    type: [Number],
    required: true,
  },
});

class UserRepo {
  static async create({
    StudentName,
    StudentLastName,
    StudentID,
    StudentPassword,
    StudentImage,
    StudentInfo,
    AssitedEvents,
  }) {
    if (
      !StudentName ||
      !StudentLastName ||
      !StudentID ||
      !StudentPassword ||
      !StudentImage ||
      !StudentInfo ||
      !AssitedEvents
    ) {
      console.error('Todos los campos son requeridos');
      throw new Error('Todos los campos son requeridos');
    }
    if (StudentPassword.length < 8) {
      console.error('La contraseña debe tener al menos 8 caracteres');
      throw new Error('La contraseña debe tener al menos 8 caracteres');
    }
    if (typeof StudentID !== 'number') {
      console.error('El ID debe ser un número');
      throw new Error('El ID debe ser un número');
    }
    if (typeof StudentInfo !== 'object') {
      console.error('El campo de información debe ser un objeto');
      throw new Error('El campo de información debe ser un objeto');
    }
    if (!Array.isArray(AssitedEvents)) {
      console.error('Los eventos asistidos deben ser un arreglo');
      throw new Error('Los eventos asistidos deben ser un arreglo');
    }
    if (
      typeof StudentName !== 'string' ||
      typeof StudentLastName !== 'string' ||
      typeof StudentImage !== 'string' ||
      typeof StudentPassword !== 'string'
    ) {
      console.error(
        'El Nombre, Apellidos, Imagen y Contraseña deben ser de tipo string'
      );
      throw new Error(
        'El Nombre, Apellidos, Imagen y Contraseña deben ser de tipo string'
      );
    }

    const hashedPassword = await bcrypt.hash(StudentPassword, 1);

    const UserModel = mongoose.model('User', UserSchema);

    const User = await UserModel.create({
      StudentName,
      StudentLastName,
      StudentID,
      StudentPassword: hashedPassword,
      StudentImage,
      StudentInfo,
      AssitedEvents,
    });

    return User;
  }

  static async findOne({ StudentID }) {
    const UserModel = mongoose.model('User', UserSchema);

    try {
      const User = await UserModel.findOne({ StudentID }).select(
        '-StudentPassword'
      );
      if (!User) {
        console.error('Este usuario no existe');
        throw new Error('Este usuario no existe');
      }
      return User;
    } catch (error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  }

  static async login({ StudentID, StudentPassword }) {
    Validation.StudentID(StudentID);
    Validation.StudentPassword(StudentPassword);
    const UserModel = mongoose.model('User', UserSchema);

    const User = await UserModel.findOne({ StudentID });
    if (!User) {
      throw new Error('Usuario no encontrado');
    }
    const isPasswordValid = await bcrypt.compare(
      StudentPassword,
      User.StudentPassword
    );
    if (!isPasswordValid) {
      throw new Error('Contraseña incorrecta');
    }

    return {
      StudentName: User.StudentName,
      StudentLastName: User.StudentLastName,
      StudentID: User.StudentID,
      StudentImage: User.StudentImage,
      StudentInfo: User.StudentInfo,
      AssitedEvents: User.AssitedEvents,
    };
  }
}

class Validation {
  static StudentID(StudentID) {
    if (!StudentID) {
      console.error('El ID es requerido');
      throw new Error('El ID es requerido');
    }
    if (typeof StudentID !== 'number') {
      console.error('El ID debe ser un número');
      throw new Error('El ID debe ser un número');
    }
  }

  static StudentPassword(StudentPassword) {
    if (!StudentPassword) {
      console.error('La contraseña es requerida');
      throw new Error('La contraseña es requerida');
    }
    if (typeof StudentPassword !== 'string') {
      console.error('La contraseña debe ser un string');
      throw new Error('La contraseña debe ser un string');
    }
    if (StudentPassword.length < 8) {
      console.error('La contraseña debe tener al menos 8 caracteres');
      throw new Error('La contraseña debe tener al menos 8 caracteres');
    }
  }
}

module.exports = UserRepo;
