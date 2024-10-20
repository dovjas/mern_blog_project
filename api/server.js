import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log('MongoDB connectd'))
.catch(error => console.log(error))

const app = express();
app.listen(3030,(req,res)=>{
    console.log('Server is running')
})
app.use(express.json());
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);