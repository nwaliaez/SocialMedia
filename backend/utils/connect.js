// Import Packages
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Db Connected');
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;
