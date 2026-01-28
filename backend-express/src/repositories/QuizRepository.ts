import QuizQuestion from '../models/Quiz.js';

export class QuizRepository {
  // Fetch all questions with their associated career paths [cite: 261, 283]
  async findAllQuestions() {
    return await (QuizQuestion as any).find().populate('options.associatedCareerId');
  }

  // Admin: Mechanism to dynamically deliver/update quiz content [cite: 29]
  async createQuestion(questionData: any) {
    const question = new (QuizQuestion as any)(questionData);
    return await question.save();
  }
}