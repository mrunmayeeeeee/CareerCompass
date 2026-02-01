import { Request, Response } from 'express';
import { CollegeService } from '../services/CollegeService.js';

const collegeService = new CollegeService();

export class CollegeController {
  async getAllColleges(req: Request, res: Response) {
    try {
      const colleges = await collegeService.getAllColleges();
      res.json(colleges);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCollegeById(req: Request, res: Response) {
    try {
      const collegeId = parseInt(req.params.id as string);
      const college = await collegeService.getCollegeDetails(collegeId);
      res.json(college);
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  }

  async getCollegesByCourse(req: Request, res: Response) {
    try {
      const courseId = parseInt(req.params.courseId as string);
      const colleges = await collegeService.getCollegesByCourse(courseId);
      res.json(colleges);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}