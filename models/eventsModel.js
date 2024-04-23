const mongoose = require('mongoose');

const eventsSchema = mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Please add the title'],
    },
    subtitle: {
        type: String,
        required: [true, 'Please add subtitle'],
    },

    date: {
        type: String,
        required: [true, 'Please add date'],
    },

    venue:{
        type:String,
        required: [true,'Please add venue'],
    }
});

module.exports = mongoose.model("events", eventsSchema);