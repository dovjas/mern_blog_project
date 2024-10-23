import User from '../models/User.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const signup = async(req, res, next)=>{
    const {username,email,password} = req.body;
    if(!username||!email||!password||username===''||email===''||password===''){
        next(errorHandler(400,'All fields are required'));
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
        // res.status(500).json({messsage:error.message});
        next(error)
    }
};

export const signin = async(req,res,next)=>{

    const {email, password} = req.body;

    if(!email || !password || email ==='' || password===''){
        return next(errorHandler(400,'All fields are required.'));
    }

    try{
        const isUserValid = await User.findOne({email});
        if(!isUserValid){
           return next(errorHandler(404,'User not found.'));
        };
        const isPasswordValid = bcryptjs.compareSync(password,isUserValid.password);
        if(!isPasswordValid){
           return next(errorHandler(400,'Password is not valid'));
        };
        const {password:pass, ...rest} = isUserValid._doc;

        const token = jwt.sign({id:isUserValid._id}, process.env.JWT_SECRET);
        res.status(200).cookie('access_token',token,{
            httpOnly:true,
        }).json(rest)

    }catch(error){
        next(error)
    }
}