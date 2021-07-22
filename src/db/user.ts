import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  id: { type: String, require: true },
  username: { type: String, require: true },
  password: { type: String, require: true },
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  email: { type: String, require: true },
  phone: { type: String, require: true },
  address: { type: String },
  avatar: { type: String },
  token: { type: String }
});

const User = mongoose.model('User', UserSchema, 'users');
export default User;
