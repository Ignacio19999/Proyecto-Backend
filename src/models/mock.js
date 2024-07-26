const mongoose = require('mongoose');
const { Schema } = mongoose;

const mockSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  datos: {
    type: Schema.Types.Mixed,
    required: true
  },
  creadoEn: {
    type: Date,
    default: Date.now
  }
});

const Mock = mongoose.model('Mock', mockSchema);

module.exports = Mock;
