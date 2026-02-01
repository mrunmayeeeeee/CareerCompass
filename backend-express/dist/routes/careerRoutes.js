import { Router } from 'express';
import { CareerController } from '../controllers/CareerController.js';
const router = Router();
const careerController = new CareerController();
// GET /api/careers
router.get('/', careerController.getAllCareers);
// GET /api/careers/:id
router.get('/:id', careerController.getCareerById);
// GET /api/careers/:id/roadmap
router.get('/:id/roadmap', careerController.getCareerRoadmap);
// GET /api/careers/:id/resources
router.get('/:id/resources', careerController.getFreeResources);
export default router;
