const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    first_name: { type: String, required: true, maxlength: 20 },
    last_name: { type: String, required: true, maxlength: 20 },
    email: { type: String, required: true, unique: true, maxlength: 50 },
    hash: String,
    salt: String,
    admin: { type: Boolean, default: false },
    phone: { type: String, required: true, unique: true },
    avatar: { type: String },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

UserSchema.virtual('fullName').get(function () {
  return this.first_name + ' ' + this.last_name;
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
