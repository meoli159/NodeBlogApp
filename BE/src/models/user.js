import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  username: { type: String, require: true },
  password: { type: String, require: true, select: false },
  name: String,
  dob: String,
  created_at: { type: Date, default: Date.now },
});

userSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

export const User = model('User', userSchema);
