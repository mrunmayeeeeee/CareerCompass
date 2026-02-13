import { Request, Response } from 'express';
import { AppDataSource } from '../data-source.js';
import { Course } from '../models/Course.js';

export class CourseController {
  
  // 1. Fetch courses for a specific stream (Science, Commerce, Arts)
  static getCoursesByStream = async (req: Request, res: Response) => {
   const stream = req.params.stream as string;
    
    try {
      const courseRepo = AppDataSource.getRepository(Course);
      
      const courses = await courseRepo.find({
        where: { stream: stream } 
      });
      
      if (courses.length === 0) {
        return res.status(404).json({ message: `No courses found for stream: ${stream}` });
      }

      res.status(200).json(courses);
    } catch (error) {
      console.error("Error fetching courses:", error);
      res.status(500).json({ message: "Error fetching courses" });
    }
  };

  // 2. Fetch ALL courses (Optional, but good for debugging)
  static getAllCourses = async (req: Request, res: Response) => {
    try {
      const courseRepo = AppDataSource.getRepository(Course);
      const courses = await courseRepo.find();
      res.json(courses);
    } catch (error) {
      res.status(500).json({ message: "Error fetching all courses" });
    }
  };
}