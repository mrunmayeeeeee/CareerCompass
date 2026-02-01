import { UserRepository } from '../repositories/UserRepository.js';

const userRepository = new UserRepository();

export class UserService {
  // Logic for user registration
  async registerUser(userData: { name: string; email: string; passwordHash: string }) {
    const existingUser = await userRepository.findByEmail(userData.email);
    if (existingUser) {
      throw new Error("User with this email already exists.");
    }
    return await userRepository.create(userData);
  }

  // Logic to fetch user profile for the personalized dashboard
  async getUserProfile(userId: number) {
    const user = await userRepository.findById(userId);
    if (!user) {
      throw new Error("User not found.");
    }
    return user;
  }

  /**
   * Logic to update student stream and skills
   * This bridges the gap between their 12th standard background and career goals.
   */
  async updatePreferences(userId: number, preferences: { stream?: string; skills?: string[] }) {
    const validStreams = ['Science', 'Commerce', 'Arts'];
    if (preferences.stream && !validStreams.includes(preferences.stream)) {
      throw new Error("Invalid stream selected.");
    }

    return await userRepository.update(userId, {
      stream: preferences.stream,
      skills: preferences.skills
    });
  }

  // Get all users (for admin purposes)
  async getAllUsers() {
    return await userRepository.findAll();
  }
}