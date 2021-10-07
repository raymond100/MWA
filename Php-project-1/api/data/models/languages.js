import mongoose from 'mongoose';
exports.languageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  // authors: [
  //   {
  //     firstname: {
  //       type: String,
  //       required: true,
  //     },
  //     lastname: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  // ],
});
