import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('DB Connected !');
    } catch (error) {
        console.error('Database connection error:', error.message);
        process.exit(1);
    }
};

export default connectDB;
