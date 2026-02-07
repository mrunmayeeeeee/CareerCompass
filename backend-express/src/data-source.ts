import 'reflect-metadata';
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

import { User } from './models/User.js';
import { Career } from './models/Career.js';
import { College } from './models/College.js';
import { Course } from './models/Course.js';
import { QuizQuestion } from './models/Quiz.js';

dotenv.config(); // 👈 REQUIRED HERE

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT), // 👈 number
  username: process.env.DB_USERNAME,
  password: String(process.env.DB_PASSWORD), // 👈 THIS FIXES IT
  database: process.env.DB_NAME,
  synchronize: true, // dev only
  logging: false,
  entities: [User, Career, College, Course, QuizQuestion],
});
