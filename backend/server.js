// Initialize App
import express from 'express';
const app = express();

// Imports
import connectDB from './utils/connect.js';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

// Import Middleware
import { auth } from './middleware/auth.js';
import { PageNotFound } from './middleware/404.js';

// Port
const PORT = 5000;

// MiddleWare
//- Parse Json request
app.use(bodyParser.json());
//- Cookie Parser
app.use(cookieParser());

// Routes
import UserRouter from './routes/user.js';
import UserProfile from './routes/userProfile.js';

// User Routes
app.use('/api/user', UserRouter);

// Profile Routes
app.use('/api/profile', auth, UserProfile);
app.use('/', PageNotFound);

app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server listening to port ${PORT}`);
});
