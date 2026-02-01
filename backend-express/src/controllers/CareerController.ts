import { Request, Response } from 'express';
import { CareerService } from '../services/CareerService.js';

const careerService = new CareerService();

export class CareerController {
  async getAllCareers(req: Request, res: Response) {
    try {
      const careers = await careerService.getAllCareers();
      res.json(careers);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCareerById(req: Request, res: Response) {
    try {
      const careerId = parseInt(req.params.id as string);
      const career = await careerService.getCareerDetails(careerId);
      res.json(career);
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  }

  async getCareerRoadmap(req: Request, res: Response) {
    try {
      const careerId = parseInt(req.params.id as string);
      const roadmap = await careerService.getCareerRoadmap(careerId);
      res.json(roadmap);
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  }

  async getFreeResources(req: Request, res: Response) {
    try {
      const careerId = parseInt(req.params.id as string);
      const resources = await careerService.getFreeResources(careerId);
      res.json(resources);
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  }
}