import { Request, Response } from 'express';
import { AppDataSource } from '../data-source.js';
import { Course } from '../models/Course.js';

export class CourseController {
  
  // 1. Fetch courses for a specific stream (Science, Commerce, Arts)
  static getCoursesByStream = async (req: Request, res: Response) => {
    const stream = req.params.stream as string;
    
    // 🕵️ DEBUG LOG 1: What is the Frontend asking for?
    console.log(`\n🔎 [DEBUG] Frontend requested stream: "${stream}"`); 

    try {
      const courseRepo = AppDataSource.getRepository(Course);
      
      // 🕵️ DEBUG LOG 2: Is the database empty?
      const allCourses = await courseRepo.find();
      console.log(`📊 [DEBUG] Total courses found in DB: ${allCourses.length}`); 
      
      if (allCourses.length > 0) {
          console.log(`📝 [DEBUG] First course in DB stream is: "${allCourses[0].stream}"`);
          // Check for hidden spaces (e.g. "Arts " vs "Arts")
          console.log(`📏 [DEBUG] Length comparison: URL=${stream.length}, DB=${allCourses[0].stream?.length}`);
      }

      // The actual search
      const courses = await courseRepo.find({
        where: { stream: stream } 
      });
      
      console.log(`🎯 [DEBUG] Query found matches: ${courses.length}`);
      
      if (!courses || courses.length === 0) {
        return res.status(404).json({ message: `No courses found for stream: ${stream}` });
      }

      return res.status(200).json(courses);
    } catch (error) {
      console.error("❌ [DEBUG] Error:", error);
      return res.status(500).json({ message: "Error fetching courses" });
    }
  };

  // 2. Fetch ALL courses (MUST BE UNCOMMENTED or the App Crashes!)
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