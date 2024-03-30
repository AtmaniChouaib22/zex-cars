const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarSchema = new Schema(
  {
    title: { type: String, maxlength: 50, required: true },
    make: { type: String, required: true, maxlength: 20 },
    model: { type: String, required: true, maxlength: 20 },
    year: { type: Number, required: true },
    location: { type: String, default: 'not provided' },
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    status: {
      type: String,
      default: 'pending',
      enum: ['pending', 'sold', 'available'],
    },
    price: { type: Number, required: true },
    description: { type: String, maxlength: 100, default: 'not provided' },
    image: { type: String, required: true },
    mileage: { type: Number },
    n_of_doors: { type: Number },
    n_of_seats: { type: Number },
    colour: { type: String, default: 'not provided' },
    fuel_type: {
      type: String,
      default: 'not provided',
      enum: [
        'petrol',
        'diesel',
        'electric',
        'hybrid',
        'hydrogen',
        'natural gas',
        'not provided',
      ],
    },
    fuel_tank_capacity: { type: Number },
    transmission: {
      type: String,
      default: 'not provided',
      enum: ['Manual', 'Automatic', 'Semi-Automatic', 'CVT', 'not provided'],
    },
    engine_capacity: { type: Number },
    gears: { type: Number },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

const Car = mongoose.model('Car', CarSchema);
module.exports = Car;
