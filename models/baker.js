const mongoose = require('mongoose')

const bakerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        enum: ['Rachel', 'Monica', 'Phoebe', 'Chandler', 'Ross', 'Joey']
    },
    startDate: {
        type: Date,
        required: true
    },
    bio: String
})

module.exports = mongoose.model('Baker', bakerSchema)