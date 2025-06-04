const User = require('../models/user'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 

const register = async(req,res) => {
    const {firstname,lastname,email,password} = req.body;
    try{
        const validEmail = await User.findOne({email});
        if(validEmail){
            return res.status(404).json({error:'Email already registered'})
        }
        const hash = await bcrypt.hash(password,10); 
        if(!hash){
            return res.status(404).json({error:'Could not authenticate password'})
        }
        const user = await User.create({firstname,lastname,email,password : hash});
        if(!user){
            return res.status(404).json({error:'Failed to sign up'})
        }
        res.status(200).json(user);
    }catch(error){
        res.json({error:error.message})
    }
}

const login = async(req,res) => {
    const {email,password} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({error:'Incorrect email'})
        } 
        const validPassword = await bcrypt.compare(password,user.password);
        if(!validPassword){
            return res.status(404).json({error:'Incorrect password'})
        }
        const token = await jwt.sign({userID : user._id},process.env.SECRET_KEY);
        if(!token){
            res.status(404).json({error:'Failed to create token'}) 
        }
        res.status(200).json({user,token});
    }catch(error){
        res.json({error:error.message})
    }
}

const remove = async(req,res) => {
    const {id} = req.params;
    try{
        const user = await User.findByIdAndDelete(id);
        if(!user){
            return res.status(404).json({error:'Could not delete user'})
        }
        res.status(200).json(user);
    }catch(error){
        res.json({error:error.message})
    }
}

const update = async(req,res) => {
    try{
        res.status(200).json(user);
    }catch(error){
        res.json({error:error.message})
    }
}

const favorites = async(req,res) => { 
    const {id} = req.params;
    const {menuID} = req.body;
    try{
        const user = await User.findByIdAndUpdate(id,{$push : {favorites : menuID}},{returnOriginal:false});
        if(!user){
            return res.status(404).json({error:'Could not add to favorites'})
        }
        res.status(200).json(user);
    }catch(error){
        res.json({error:error.message})
    }
}

module.exports = {register,login,update,remove,favorites};