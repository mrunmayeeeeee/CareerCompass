import mongoose, { Schema } from 'mongoose';
const Course = new Schema({
    courseName: { type: String, required: true }, // [cite: 252]
    description: { type: String }, // [cite: 252]
    durationYears: { type: Number }, // [cite: 252]
    fees: { type: String }, // [cite: 124]
    eligibilityCriteria: { type: String }, // [cite: 252]
    stream: { type: String, enum: ['Science', 'Commerce', 'Arts'] }, // [cite: 162]
    futureScope: { type: String } // [cite: 113]
});
export default mongoose.model('Course', Course);
