import { Router } from 'express';
import { CollegeController } from '../controllers/CollegeController.js';

const router = Router();
const collegeController = new CollegeController();

// GET /api/colleges
router.get('/', collegeController.getAllColleges);

// GET /api/colleges/:id
router.get('/:id', collegeController.getCollegeById);

// GET /api/colleges/course/:courseId
router.get('/course/:courseId', collegeController.getCollegesByCourse);

export default router;