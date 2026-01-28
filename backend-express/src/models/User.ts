import mongoose, { Schema} from 'mongoose';

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  stream: { type: String, enum: ['Science', 'Commerce', 'Arts'] }, // [cite: 266]
  profile: {
    currentRole: { type: String, default: 'Student' },
    skills: [String],
    interests: [String]
  }
}, { timestamps: true });

export default mongoose.model('User', UserSchema);