import mongoose from 'mongoose';

export const MotivationSchema = new mongoose.Schema({
  id: { type: String, require: true },
  title: { type: String, require: true }
});

const Motivation = mongoose.model('Motivation', MotivationSchema, 'motivations');
export default Motivation;
