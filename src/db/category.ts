import mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String },
  order: { type: Number }
});

const Category = mongoose.model('Category', CategorySchema, 'categories');
export default Category;
