const mongoose = require('mongoose');
const { Schema } = mongoose;

const ticketSchema = new Schema({
  usuarioId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  carritoId: {
    type: Schema.Types.ObjectId,
    ref: 'Cart',
    required: true
  },
  montoTotal: {
    type: Number,
    required: true,
    min: 0
  },
  estado: {
    type: String,
    enum: ['Pendiente', 'Pagado', 'Cancelado'],
    default: 'Pendiente'
  },
  creadoEn: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
