import mongoose from 'mongoose';
import { authorSchema } from './author';

exports.languageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  authors: [authorSchema],
});
