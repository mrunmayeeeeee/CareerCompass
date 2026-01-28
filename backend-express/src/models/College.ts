import mongoose, { Schema } from 'mongoose';

const CollegeSchema = new Schema({
  collegeName: { type: String, required: true }, // [cite: 249]
  location: { type: String }, // [cite: 249]
  websiteUrl: { type: String }, // [cite: 124]
  description: { type: String }, // [cite: 249]
  offeredCourses: [{ 
    courseId: { type: Schema.Types.ObjectId, ref: 'Course' },
    cutoff: { type: String } // [cite: 124]
  }]
});

export default mongoose.model('College', CollegeSchema);