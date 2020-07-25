const mongoose = require ('mongoose')

const assignmentSchema = new mongoose.Schema({
    
    username:{
        type: String,
        required: true
    },

    assignmentReport:{
        type: String,
        required: true
    },

    timeSubmitted:{
        type: String,
        required: true
    },

    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('assignmentdb', assignmentSchema)
