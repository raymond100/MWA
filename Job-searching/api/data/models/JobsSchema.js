const mongoose = require("mongoose");
const locationSchema = require("./locationSchema");

const JobSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
  },
  location: [locationSchema],

  description: {
    type: String,
    required: true,
  },

  experience: {
    type: String,
  },

  skills: [
    {
      name: {
        type: String,
      },
    },
  ],

  postDate: {
    type: Date,
    required: true,
  },
});

mongoose.model("Job", JobSchema, "Jobs");
