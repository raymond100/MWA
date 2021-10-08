const mongoose = require("mongoose");

const LocationSchema = mongoose.Schema({
  address: String,
  // Store coordinates in order longitude (E/W), latitude (N/S)
  coordinates: {
    type: [Number],
    index: "2dsphere",
  },
});
