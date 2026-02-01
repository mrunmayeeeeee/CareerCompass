import { QuizService } from '../services/QuizService.js';
const quizService = new QuizService();
export class QuizController {
    async getQuiz(req, res) {
        try {
            const quiz = await quizService.getFullQuiz();
            res.json(quiz);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async submitQuiz(req, res) {
        try {
            const { selectedOptionIds } = req.body;
            if (!selectedOptionIds || !Array.isArray(selectedOptionIds)) {
                return res.status(400).json({ error: 'selectedOptionIds must be an array' });
            }
            const results = await quizService.calculateResults(selectedOptionIds);
            res.json({
                message: 'Quiz results calculated successfully',
                recommendations: results
            });
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
