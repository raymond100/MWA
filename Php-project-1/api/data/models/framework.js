import mongoose from 'mongoose';
import { languageSchema } from './languages';

const frameworkSchema = new mongoose.Schema({
  app_name: {
    type: String,
    required: true,
  },
  app_description: String,
  authors: [{ firstname: String, lastname: String }],
  developpers: [{ company: String }],
  initial_release: Date,
  stable_release: Date,
  version: String,
  repository: String,
  languages: [languageSchema],
  Os: [{ name: String }],
  type: {
    type: String,
  },
  licence: String,
  website: String,
});

mongoose.model('Framework', frameworkSchema, 'frameworks');
