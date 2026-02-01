import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
// Import route modules
import userRoutes from './routes/userRoutes.js';
import careerRoutes from './routes/careerRoutes.js';
import collegeRoutes from './routes/collegeRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import quizRoutes from './routes/quizRoutes.js';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const MONGO_URI = 'mongodb://127.0.0.1:27017/CareerCompass';
mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ Connected to CareerCompass Database'))
    .catch((err) => console.error('❌ MongoDB Connection Error:', err));
// API Routes
app.use('/api/users', userRoutes);
app.use('/api/careers', careerRoutes);
app.use('/api/colleges', collegeRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/quiz', quizRoutes);
// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'CareerCompass API is running' });
});
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}`);
    console.log(`📚 API Documentation available at http://localhost:${PORT}/api/health`);
});
