const mongoose = require('mongoose')
const Bread = require('./bread')

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
}, {
    toJSON: { virtuals: true }
})

bakerSchema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'baker'
})

bakerSchema.post('findByIdAndDelete', async function () {
    // console.log(this)
    await Bread.deleteMany({ baker: this._conditions._id })
})
module.exports = mongoose.model('Baker', bakerSchema)