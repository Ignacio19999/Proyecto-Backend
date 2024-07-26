const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  nombreUsuario: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  correoElectronico: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  contraseña: {
    type: String,
    required: true
  },
  rol: {
    type: String,
    enum: ['Usuario', 'Administrador'],
    default: 'Usuario'
  },
  creadoEn: {
    type: Date,
    default: Date.now
  },
  actualizadoEn: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
