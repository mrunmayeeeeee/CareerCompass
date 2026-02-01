import { UserService } from '../services/UserService.js';
const userService = new UserService();
export class UserController {
    async register(req, res) {
        try {
            const { name, email, passwordHash } = req.body;
            const user = await userService.registerUser({ name, email, passwordHash });
            res.status(201).json({
                message: 'User registered successfully',
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    stream: user.stream
                }
            });
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async getProfile(req, res) {
        try {
            const userId = req.params.id;
            const user = await userService.getUserProfile(userId);
            res.json({
                id: user._id,
                name: user.name,
                email: user.email,
                stream: user.stream,
                profile: user.profile
            });
        }
        catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
    async updatePreferences(req, res) {
        try {
            const userId = req.params.id;
            const preferences = req.body;
            const user = await userService.updatePreferences(userId, preferences);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json({
                message: 'Preferences updated successfully',
                user: {
                    id: user._id,
                    stream: user.stream,
                    profile: user.profile
                }
            });
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async getAllUsers(req, res) {
        try {
            const users = await userService.getAllUsers();
            res.json(users);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
