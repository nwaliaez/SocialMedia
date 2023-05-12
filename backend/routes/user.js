// Initialize Express Router
import express from 'express';
const router = express.Router();

// Import controller
import { createUser, loginUser } from '../controller/user.js';

router.post('/register', createUser);
router.post('/login', loginUser);

export default router;
