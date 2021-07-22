import mongoose from 'mongoose';

export const MotivationSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String }
});

const Motivation = mongoose.model('Motivation', MotivationSchema, 'motivations');
export default Motivation;
