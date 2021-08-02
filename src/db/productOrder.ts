import mongoose from 'mongoose';

export const ProductOrderSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String },
  description: { type: String },
  category: { type: String },
  stock: { type: Number },
  sales: { type: Number },
  price: { type: Number },
  date: { type: Number },
  motivations: { type: [String] },
  image: { type: String },
  quantity: { type: Number }
});
