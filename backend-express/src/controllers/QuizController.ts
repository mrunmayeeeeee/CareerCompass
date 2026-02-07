import { Request, Response } from 'express';
import { QuizRepository } from '../repositories/QuizRepository.js';

const quizRepository = new QuizRepository();

export class QuizController {
  async getByCategory(req: Request, res: Response) {
    try {
      // If it's an array, take the first element; otherwise use the string
      const category = Array.isArray(req.query.category)
        ? req.query.category[0]
        : (req.query.category as string);

      if (!category) {
        return res.status(400).json({ message: "Category is required" });
      }

      // Logic to find questions...
    } catch (error) {
      res.status(500).send(error);
    }
  }
  // GET: Fetch all questions from Postgres
  async getAllQuestions(req: Request, res: Response) {
    try {
      const questions = await quizRepository.findAll();
      res.status(200).json(questions);
    } catch (error: any) {
      res.status(500).json({ message: "Error fetching questions from database", error: error.message });
    }
  }

  // POST: Add a new question to the database
  async addQuestion(req: Request, res: Response) {
    try {
      // req.body should match the QuizQuestion entity (category, questionText, optionA, etc.)
      const newQuestion = await quizRepository.create(req.body);
      res.status(201).json(newQuestion);
    } catch (error: any) {
      res.status(400).json({ message: "Error saving question to database", error: error.message });
    }
  }

  async removeQuestion(req: Request, res: Response) {
    try {
      // Force the id to be treated as a string before parsing
      const idParam = req.params.id as string;
      const id = parseInt(idParam, 10);

      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }

      await quizRepository.delete(id);
      res.status(200).json({ message: "Question deleted successfully" });
    } catch (error: any) {
      res.status(500).json({ message: "Delete failed", error: error.message });
    }
  }
}