import express from 'express';
import bcrypt from 'bcryptjs'

import User from '../models/userModel.js';

const router = express.Router();

router.get("/test", (req,res) =>{
    res.send("Hello it's working")
})

router.route('/register').post(async (req,res)=>{
    console.log(req.body)
    const { username, email, password } = req.body
    console.log(email)
    
    if(!username || !email || !password){
        return res
            .status(400)
            .json({errorMessage: "Some form inputs are not correct"})
    }
    else{
        const hashedpassword = await bcrypt.hash(req.body.password,13);
        const newUser = new User(
            {
                username,
                email,
                password,
            });
        newUser.save()
            .then(() => res.json('User added!'))
            .then(() => res.send('User added! Redirecting you to the home page...'))
            .catch(err => res.status(400).json('Error: ' + err));
    }
});

router.get("/allusers", (req,res) =>{
    User.find((err, users)=>{
        res.send(users)
    });
})

export default  router