import mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
  id: { type: String, require: true },
  name: { type: String, require: true }
});

const Category = mongoose.model('Category', CategorySchema, 'categories');
export default Category;
