import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import userRoutes from './routes/user.js';

dotenv.config();

const app = express();
const PORT = process.env.APP_PORT || 5000;

app.use(express.json()); // allows us to accept JSON data in the req.body

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server started at http://localhost:${PORT}`);
});
