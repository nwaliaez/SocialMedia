// Initialize Express Router
import express from 'express';
const router = express.Router();

// Import controller
import { getUser, deleteUser, updateUser } from '../controller/userProfile.js';

router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.patch('/:id', updateUser);

export default router;
