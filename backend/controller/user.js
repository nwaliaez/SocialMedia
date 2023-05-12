import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

// Hash Password
const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
};

// Insert User
export const createUser = async (req, res) => {
    try {
        const { password } = req.body;
        const hashedPassword = await hashPassword(password);
        const user = new User({ ...req.body, password: hashedPassword });
        const savedUser = await user.save();

        const token = jwt.sign(
            { userId: user._id, username: user.username },
            process.env.JWT_SECRET
        );
        res.cookie('ezToken', { token }, { httpOnly: true });
        res.status(201).json(savedUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Could not create user' });
    }
};

// Login user
export const loginUser = async (req, res) => {
    const { username, password } = req.body;
    let user = await User.findOne({ username }).select('+password');
    if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
    }
    const comparison = await bcrypt.compare(password, user.password);
    if (!comparison) {
        res.status(404).json({ error: 'User not found' });
        return;
    }
    user = user.toObject();
    delete user.password;

    const token = jwt.sign(
        { userId: user._id, username: user.username },
        process.env.JWT_SECRET
    );
    res.cookie('ezToken', { token }, { httpOnly: true });
    user._id, user.username;
    res.status(200).json(user);
};
