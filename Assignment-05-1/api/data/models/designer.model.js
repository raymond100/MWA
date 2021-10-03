const { Schema } = require('mongoose');

exports.designerSchema = new Schema({
    name: {
        type: String
    }
})