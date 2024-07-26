const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  precio: {
    type: Number,
    required: true,
    min: 0
  },
  descripcion: {
    type: String,
    trim: true
  },
  categoria: {
    type: String,
    required: true,
    enum: ['Consolas', 'Juegos', 'Computadoras', 'Accesorios']
  },
  stock: {
    type: Number,
    required: true,
    min: 0
  },
  imagenUrl: {
    type: String,
    trim: true
  },
  fechaLanzamiento: {
    type: Date
  },
  plataforma: {
    type: String,
    enum: ['PlayStation', 'Xbox', 'PC', 'Nintendo', 'Otro']
  }
}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
