'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    name: {
        type: String,
        require: 'Enter name of task'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['todo', 'doing', 'down']
        }],
        default: ['todo']
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);