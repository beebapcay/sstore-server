import mongoose from 'mongoose';
import { ProductSchema } from './product';

export const UserSchema = new mongoose.Schema({
  id: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  phone: { type: String },
  password: { type: String },
  avatar: { type: String },
  age: { type: Number },
  gender: { type: String },
  favourites: { type: [ProductSchema] }
});

const User = mongoose.model('User', UserSchema, 'users');
export default User;
