import { Schema } from "mongoose";

const CareerSchema = new Schema({
  careerTitle: { type: String, required: true }, // [cite: 257]
  jobDescription: { type: String }, // [cite: 257]
  averageSalary: { type: String }, // [cite: 118]
  requiredSkills: [String], // [cite: 118]
  roadmapSteps: [{
    stepTitle: { type: String },
    description: { type: String }
  }],
  learningResources: [{ 
    title: { type: String },
    url: { type: String },
    isFree: { type: Boolean, default: true } // [cite: 17, 137]
  }]
});