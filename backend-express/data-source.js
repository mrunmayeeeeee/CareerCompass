import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { User } from "./models/User.js";
import { Course } from "./models/Course.js";
import { College } from "./models/College.js";
import { Career } from "./models/Career.js";
import { QuizQuestion } from "./models/Quiz.js";

dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true, // Auto-creates tables based on models - use false in production
    logging: false,
    entities: [User, Course, College, Career, QuizQuestion],
    migrations: [],
    subscribers: [],
});