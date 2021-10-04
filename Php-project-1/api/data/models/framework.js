import mongoose from 'mongoose';
import { languageSchema } from './languages';

const frameworkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  languages: [languageSchema],

  release_date: {
    type: Date,
    default: Date.now,
  },

  latest_version: {
    type: String,
    max: 16,
  },
});

mongoose.model('Framework', frameworkSchema, 'frameworks');
