import mongoose from 'mongoose';
import { authorSchema } from './authorSchema';

exports.languageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  authors: [authorSchema],
});
