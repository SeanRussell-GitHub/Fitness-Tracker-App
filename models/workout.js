const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
    day: { type: Date,
        default: () => new Date() },
    exercises: [
        {
            name: {
                type: String,
            },
            type: {
                type: String
            },
            weight: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            duration: {
                type: Number,
            },
        }
    ]
},
{
    toJSON: {
        virtuals: true
    }
}
);

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;