import { Router } from 'express';
import { QuizController } from '../controllers/QuizController.js';
import { authorize } from '../middleware/authMiddleware.js';

const router = Router();
const quizController = new QuizController();

// GET all questions (Everyone)
router.get('/', (req, res) => quizController.getAllQuestions(req, res));

// CREATE / DELETE questions (Faculty & Admin Only)
router.post('/', authorize(['admin', 'faculty']), (req, res) => quizController.addQuestion(req, res));
router.delete('/:id', authorize(['admin', 'faculty']), (req, res) => quizController.removeQuestion(req, res));

export default router;