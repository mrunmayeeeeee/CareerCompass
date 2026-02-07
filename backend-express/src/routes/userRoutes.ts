import { Router } from 'express';
import { UserController } from '../controllers/UserController.js';
import { authorize } from '../middleware/authMiddleware.js';

const router = Router();
const userController = new UserController();

// Public Routes
router.post('/register', (req, res) => userController.register(req, res));
router.post('/login', (req, res) => userController.login(req, res));

// Protected Routes (Admin Only)
router.get('/', authorize(['admin']), (req, res) => userController.getAllUsers(req, res));
// TEMPORARY: Allow anyone to see users
//router.get('/', (req, res) => userController.getAllUsers(req, res));

router.delete('/:id', authorize(['admin']), (req, res) => userController.deleteUser(req, res));

// Protected Routes (Any logged in user)
router.get('/:id', authorize(['student', 'faculty', 'admin']), (req, res) => userController.getProfile(req, res));

export default router;