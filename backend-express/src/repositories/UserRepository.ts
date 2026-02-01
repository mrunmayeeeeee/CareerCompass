import { Repository } from 'typeorm';
import { User } from '../models/User.js';
import { AppDataSource } from '../data-source.js';

export class UserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  // Find a user by email for login/registration checks
  async findByEmail(email: string) {
    return await this.repository.findOne({ where: { email } });
  }

  // Find a specific user by ID to populate their dashboard
  async findById(userId: number) {
    return await this.repository.findOne({ where: { id: userId } });
  }

  // Create a new user record
  async create(userData: Partial<User>) {
    const newUser = this.repository.create(userData);
    return await this.repository.save(newUser);
  }

  // Update user progress or stream interests
  async update(userId: number, updateData: Partial<User>) {
    await this.repository.update(userId, updateData);
    return await this.repository.findOne({ where: { id: userId } });
  }

  // Find all users
  async findAll() {
    return await this.repository.find();
  }
}