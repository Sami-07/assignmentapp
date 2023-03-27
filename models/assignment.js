// same instance of mongoose is required...if mongoose is used at multiple places....this is done automatically by express
const mongoose = require('mongoose');

// Schema for data storage
const assignmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String, 
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    dos: {
        type: Date,
        required: true
    }

});

// define/name the collection/model of the above schema in the database
const Assignment = mongoose.model('Assignment', assignmentSchema)

// export the collection in order to use it
module.exports = Assignment;