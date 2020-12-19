const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    day: Date,
    exercises: [{
        type: String,
        name: { type: String, required: true },
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number,
    }]

});

const workOut = mongoose.model('Exercise', workoutSchema)

module.exports = workOut;