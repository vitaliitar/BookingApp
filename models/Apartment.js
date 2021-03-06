const { Schema, model, Types } = require('mongoose');

const apartmentSchema = new Schema({
  name: {
    type: String,
    minlength: 5,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  isFree: {
    type: Boolean,
    default: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  images: {
    type: Array
  },
  ownerId: {
    type: Types.ObjectId,
    ref: 'User',
  },
});

module.exports = model('Apartment', apartmentSchema);
