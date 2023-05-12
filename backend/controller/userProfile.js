import User from '../models/User.js';

// Get user by Id
export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        console.log(user);
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to get user' });
    }
};

// Delete user by id
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(500).json({ error: 'Could not delete user' });
    }
};

// Update user by id
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { username, dob, gender, email } = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            id,
            {
                username,
                dob,
                gender,
                email,
            },
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: 'Could not update user' });
    }
};
