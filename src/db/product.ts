import mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  id: { type: String, require: true },
  name: { type: String, require: true },
  description: { type: String, require: true },
  category: { type: String, require: true },
  stock: { type: Number },
  sales: { type: Number },
  price: { type: Number, require: true },
  motivations: { type: [String] },
  image: { type: String }
});

const Product = mongoose.model('Product', ProductSchema, 'products');
export default Product;
