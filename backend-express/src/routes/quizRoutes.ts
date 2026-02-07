import { Router } from 'express';
import { QuizController } from '../controllers/QuizController.js';

const router = Router();
const quizController = new QuizController();

// Use arrow functions to maintain 'this' context if needed
router.get('/', (req, res) => quizController.getAllQuestions(req, res));
router.post('/', (req, res) => quizController.addQuestion(req, res));
router.delete('/:id', (req, res) => quizController.removeQuestion(req, res));

export default router;