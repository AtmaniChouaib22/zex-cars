const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DealSchema = new Schema(
  {
    buyer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    seller: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    car: { type: Schema.Types.ObjectId, ref: 'Car', required: true },
    payment_method: {
      type: String,
      required: true,
      enum: ['cash', 'credit_card'],
    },
    confirmed: {
      type: String,
      default: 'waiting',
      enum: ['waiting', 'confirmed', 'rejected'],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

const Deal = mongoose.model('Deal', DealSchema);
module.exports = Deal;
