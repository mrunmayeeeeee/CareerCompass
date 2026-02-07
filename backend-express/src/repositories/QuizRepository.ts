import { AppDataSource } from "../data-source.js";
import { QuizQuestion } from "../models/Quiz.js";

export class QuizRepository {
    private db = AppDataSource.getRepository(QuizQuestion);

    async findAll() {
        return await this.db.find();
    }

    async create(data: Partial<QuizQuestion>) {
        const newQuestion = this.db.create(data);
        return await this.db.save(newQuestion);
    }

    async delete(id: number) {
        return await this.db.delete(id);
    }
}