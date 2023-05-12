import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        select: false,
        required: true,
    },
    dob: {
        type: Date,
    },
    gender: {
        type: String,
        lowercase: true,
        enum: ['male', 'female'],
    },
});

const User = model('User', userSchema);

export default User;
