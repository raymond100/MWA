const { Schema } = require('mongoose');

exports.courseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    instructor: {
        type: String
    }
});