import mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String },
  description: { type: String },
  category: { type: String },
  stock: { type: Number },
  sales: { type: Number },
  price: { type: Number },
  motivations: { type: [String] },
  image: { type: String }
});

const Product = mongoose.model('Product', ProductSchema, 'products');
export default Product;
