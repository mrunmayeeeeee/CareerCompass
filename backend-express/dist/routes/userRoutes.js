import { Router } from 'express';
import { UserController } from '../controllers/UserController.js';
const router = Router();
const userController = new UserController();
// POST /api/users/register
router.post('/register', userController.register);
// GET /api/users
router.get('/', userController.getAllUsers);
// GET /api/users/:id
router.get('/:id', userController.getProfile);
// PUT /api/users/:id/preferences
router.put('/:id/preferences', userController.updatePreferences);
export default router;
