import express from 'express';

const app = express();
app.listen(3030,(req,res)=>{
    console.log('Server is running')
})