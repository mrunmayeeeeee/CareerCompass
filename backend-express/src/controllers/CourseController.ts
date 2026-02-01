import { Request, Response } from 'express';
import { CourseService } from '../services/CourseService.js';

const courseService = new CourseService();

export class CourseController {
  async getCoursesByStream(req: Request, res: Response) {
    try {
      const stream = req.params.stream as string;
      const courses = await courseService.getCoursesByStream(stream);
      res.json(courses);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async getCourseById(req: Request, res: Response) {
    try {
      const courseId = parseInt(req.params.id as string);
      const course = await courseService.getCourseDetails(courseId);
      res.json(course);
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  }

  async compareCourses(req: Request, res: Response) {
    try {
      const { courseId1, courseId2 } = req.body;
      const comparison = await courseService.compareCourses(parseInt(courseId1), parseInt(courseId2));
      res.json(comparison);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}