import { QuizRepository } from '../repositories/QuizRepository.js';

const quizRepository = new QuizRepository();

export class QuizService {
  // Fetch the full quiz for the student [cite: 119]
  async getFullQuiz() {
    return await quizRepository.findAllQuestions();
  }

  /**
   * Recommendation Algorithm (Weighted Scoring System) 
   * Takes an array of selected option IDs and calculates the top suggested career.
   */
  async calculateResults(selectedOptionIds: string[]) {
    const questions = await quizRepository.findAllQuestions();
    const careerScores: Record<string, { count: number; career: any }> = {};

    // Logic to associate answer options with specific career categories 
    questions.forEach((question: { options: any[]; }) => {
      question.options.forEach(option => {
        if (selectedOptionIds.includes(option._id.toString()) && option.associatedCareerId) {
          const careerId = option.associatedCareerId._id.toString();
          
          if (!careerScores[careerId]) {
            careerScores[careerId] = { count: 0, career: option.associatedCareerId };
          }
          careerScores[careerId].count += 1; // Basic weighted scoring 
        }
      });
    });

    // Sort to find the top career match [cite: 15, 98]
    const recommendations = Object.values(careerScores).sort((a, b) => b.count - a.count);

    if (recommendations.length === 0) {
      throw new Error("Could not determine recommendations from the provided answers.");
    }

    // Returns personalized suggestions based on quiz results [cite: 31, 136]
    return recommendations.map(rec => ({
      career: rec.career,
      matchStrength: rec.count
    }));
  }
}