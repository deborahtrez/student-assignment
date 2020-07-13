const mongoose = require ('mongoose')

const assignmentSchema = new mongoose.Schema({
    studentRegNum:{
        type: Number,
         required: true
    },

    username:{
        type: String,
        required: true
    },

    assignmentReport:{
        type: String,
        required: true
    },

    timeSubmitted:{
        type: Number,
        required: true
    },

    date:{
        type: Date,
        required: Date.now
    }
})

module.exports = mongoose.model('assignmentdb', assignmentSchema)
