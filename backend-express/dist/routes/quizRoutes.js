import { Router } from 'express';
import { QuizController } from '../controllers/QuizController.js';
const router = Router();
const quizController = new QuizController();
// GET /api/quiz
router.get('/', quizController.getQuiz);
// POST /api/quiz/submit
router.post('/submit', quizController.submitQuiz);
export default router;
