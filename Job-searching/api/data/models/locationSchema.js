const mongoose = require("mongoose");

const LocationSchema = mongoose.Schema({
  address: String,
  // Store coordinates in order longitude (E/W), latitude (N/S)
  location: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ["Point"], // 'location.type' must be 'Point'
      required: true,
    },
    coordinates: {
      type: [Number],
      index: "2dsphere", // Create a special 2dsphere index on `City.location`
      required: true,
    },
  },
});
