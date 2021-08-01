import mongoose from 'mongoose';
import { ProductSchema } from './product';

export const OrderSchema = new mongoose.Schema({
  id: { type: String },
  items: { type: [ProductSchema] },
  subTotalCost: { type: Number },
  shipCost: { type: Number },
  totalCost: { type: Number }
});

const Order = mongoose.model('Order', OrderSchema, 'orders');
export default Order;
