const { Schema } = require('mongoose');

exports.publisherSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: Number,
        required: true
    },
    established: {
        type: Date,
        required: false
    },
    location: {
        address: String,
        // Store coordinates in order longitude (E/W), latitude (N/S)
        coordinates: {
            type: [Number],
            index: "2dsphere"
        }
    }
});