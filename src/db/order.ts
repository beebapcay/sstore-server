import mongoose from 'mongoose';
import { ProductSchema } from './product';
import { UserSchema } from './user';

export const OrderSchema = new mongoose.Schema({
  id: { type: String },
  user: { type: UserSchema },
  items: { type: [ProductSchema] },
  subTotalCost: { type: Number },
  shipCost: { type: Number },
  totalCost: { type: Number },
  date: { type: Number },
  address: { type: String },
  note: { type: String },
  firstName: { type: String },
  lastName: { type: String }
});

const Order = mongoose.model('Order', OrderSchema, 'orders');
export default Order;
