import User from '../models/User.model.js';
import bcryptjs from 'bcryptjs';

export const signup = async(req,res)=>{
    const {username,email,password} = req.body;
    if(!username||!email||!password||username===''||email===''||password===''){
        res.status(400).json({message:'All fields are required'});
    }
    const hashedPassword = bcryptjs.hashSync(password,10);

    const newUser = new User({
        username,
        email,
        password:hashedPassword
    });

    try{
        await newUser.save();
        res.status(201).json('User is created');

    }catch(error){
        res.status(500).json({messsage:error.message});
    }
};