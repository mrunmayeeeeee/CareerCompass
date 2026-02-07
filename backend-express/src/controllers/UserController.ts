import { Request, Response } from 'express';
import { AppDataSource } from '../data-source.js';
import { User } from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class UserController {
    private userRepo = AppDataSource.getRepository(User);

    // --- REGISTER ---
    async register(req: Request, res: Response) {
        try {
            const { username, email, password, role } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            
            const newUser = this.userRepo.create({
                username,
                email,
                password: hashedPassword,
                role: role || 'student'
            });

            await this.userRepo.save(newUser);
            res.status(201).json({ message: "User created successfully" });
        } catch (error: any) {
            res.status(500).json({ message: "Registration failed", error: error.message });
        }
    }

    // --- LOGIN ---
    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const user = await this.userRepo.findOneBy({ email });

            if (!user || !(await bcrypt.compare(password, user.password))) {
                return res.status(401).json({ message: "Invalid email or password" });
            }

            const token = jwt.sign(
                { id: user.id, role: user.role },
                process.env.JWT_SECRET || 'career_secret_key',
                { expiresIn: '1d' }
            );

            res.json({ token, role: user.role, username: user.username });
        } catch (error: any) {
            res.status(500).json({ message: "Login failed" });
        }
    }

    // --- ADMIN: GET ALL USERS ---
    async getAllUsers(req: Request, res: Response) {
        try {
            const users = await this.userRepo.find({
                select: { id: true, username: true, email: true, role: true } // No passwords!
            });
            res.status(200).json(users);
        } catch (error: any) {
            res.status(500).json({ message: "Error fetching users" });
        }
    }

    // --- ADMIN: DELETE USER ---
    async deleteUser(req: Request, res: Response) {
        try {
            // FIX: Cast 'req.params.id' to string to satisfy TypeScript
            const id = parseInt(req.params.id as string); 
            
            await this.userRepo.delete(id);
            res.status(200).json({ message: "User deleted successfully" });
        } catch (error: any) {
            res.status(500).json({ message: "Error deleting user" });
        }
    }

    // --- PROFILE placeholder (to fix your router error) ---
    async getProfile(req: Request, res: Response) {
        // You can implement this later
        res.json({ message: "Profile data" });
    }
}