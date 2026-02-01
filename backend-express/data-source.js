import { DataSource } from 'typeorm';
import { User } from './src/models/User.js';
import { Career } from './src/models/Career.js';
import { College } from './src/models/College.js';
import { Course } from './src/models/Course.js';
import { Quiz } from './src/models/Quiz.js';
export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true, // Set to false in production
    logging: false,
    entities: [User, Career, College, Course, Quiz],
    subscribers: [],
    migrations: [],
});
