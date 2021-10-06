const mongoose = require("mongoose");
const { publisherSchema } = require("./publisher.model");
const { reviewSchema } = require("./review.model");
const { designerSchema } = require("./designer.model");

const gameSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
  },
  rate: {
    type: Number,
    min: 1,
    max: 5,
    default: 1,
  },
  price: {
    type: Number,
  },
  minPlayers: {
    type: Number,
  },
  maxPlayers: {
    type: Number,
  },
  publisher: publisherSchema,
  reviews: [reviewSchema],
  minAge: {
    type: Number,
  },
  designers: designerSchema,
});

mongoose.model("Game", gameSchema, "games");
