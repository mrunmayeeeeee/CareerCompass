import { Repository } from 'typeorm';
import { Quiz } from '../models/Quiz.js';
import { AppDataSource } from '../data-source.js';

export class QuizRepository {
  private repository: Repository<Quiz>;

  constructor() {
    this.repository = AppDataSource.getRepository(Quiz);
  }

  // Fetch all questions with their associated career paths
  async findAllQuestions() {
    return await this.repository.find();
  }

  // Admin: Mechanism to dynamically deliver/update quiz content
  async createQuestion(questionData: Partial<Quiz>) {
    const question = this.repository.create(questionData);
    return await this.repository.save(question);
  }
}