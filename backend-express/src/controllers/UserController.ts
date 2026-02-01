import { Request, Response } from 'express';
import { UserService } from '../services/UserService.js';

const userService = new UserService();

export class UserController {
  async register(req: Request, res: Response) {
    try {
      const { name, email, passwordHash } = req.body;
      const user = await userService.registerUser({ name, email, passwordHash });
      res.status(201).json({
        message: 'User registered successfully',
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          stream: user.stream
        }
      });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async getProfile(req: Request, res: Response) {
    try {
      const userId = parseInt(req.params.id as string);
      const user = await userService.getUserProfile(userId);
      res.json({
        id: user.id,
        name: user.name,
        email: user.email,
        stream: user.stream,
        profile: {
          currentRole: user.currentRole,
          skills: user.skills,
          interests: user.interests
        }
      });
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  }

  async updatePreferences(req: Request, res: Response) {
    try {
      const userId = parseInt(req.params.id as string);
      const preferences = req.body;
      const user = await userService.updatePreferences(userId, preferences);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({
        message: 'Preferences updated successfully',
        user: {
          id: user.id,
          stream: user.stream,
          profile: {
            currentRole: user.currentRole,
            skills: user.skills,
            interests: user.interests
          }
        }
      });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await userService.getAllUsers();
      res.json(users);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}