const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartSchema = new Schema({
  usuarioId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  productos: [
    {
      productoId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
      cantidad: {
        type: Number,
        required: true,
        min: 1
      }
    }
  ],
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

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
