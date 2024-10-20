import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log('MongoDB connectd'))
.catch(error => console.log(error))

const app = express();
app.listen(3030,(req,res)=>{
    console.log('Server is running')
})
//npIN27c9A3NzYF2m