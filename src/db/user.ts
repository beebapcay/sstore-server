import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  id: { type: String },
  username: { type: String },
  password: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  phone: { type: String },
  address: { type: String },
  avatar: { type: String },
  token: { type: String }
});

const User = mongoose.model('User', UserSchema, 'users');
export default User;
