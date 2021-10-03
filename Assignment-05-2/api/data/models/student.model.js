const { Schema } = require('mongoose');
const { courseSchema } = require('./course.model');


exports.studentSchema = Schema({
    name: {
        type: String,
        required: true
    },
    gpa: {
        type: Number
    },
    courses: [courseSchema]

});

//mongoose.model('Game', gameSchema, 'games');