import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import User from './User.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = 'mongodb://127.0.0.1:27017/CareerCompass';

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Connected to CareerCompass Database'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err));

app.get('/api/users', async (req, res) => {
  try {
    // We use the 'User' Model to find data
    const allUsers = await User.find(); 
    res.json(allUsers);
  } catch (err) {
    res.status(500).json({ message: "Error fetching users" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});