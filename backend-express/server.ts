import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Replace with your actual connection string if using MongoDB Atlas
const MONGO_URI = 'mongodb://127.0.0.1:27017/CareerCompass';

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Connected to CareerCompass Database'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err));

app.get('/', (req, res) => {
  res.send('CareerCompass API is running...');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});