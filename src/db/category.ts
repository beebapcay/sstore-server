import mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String }
});

const Category = mongoose.model('Category', CategorySchema, 'categories');
export default Category;
