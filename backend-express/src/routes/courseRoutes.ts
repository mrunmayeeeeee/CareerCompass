import { Router } from 'express';
import { CourseController } from '../controllers/CourseController.js';

const router = Router();

// This line defines the URL: /api/courses/stream/Arts
router.get('/stream/:stream', CourseController.getCoursesByStream);

// This defines: /api/courses
router.get('/', CourseController.getAllCourses);

export default router;