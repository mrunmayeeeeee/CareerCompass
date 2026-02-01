import { Router } from 'express';
import { CourseController } from '../controllers/CourseController.js';

const router = Router();
const courseController = new CourseController();

// GET /api/courses/stream/:stream
router.get('/stream/:stream', courseController.getCoursesByStream);

// GET /api/courses/:id
router.get('/:id', courseController.getCourseById);

// POST /api/courses/compare
router.post('/compare', courseController.compareCourses);

export default router;