import express from 'express';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

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
            return res.status(400).json({
                errorMessage: "Some form inputs are not correct",
            })
        }
        if(username.length <= 4 || password.length <= 4 ){
            return res.status(400).json({
                errorMessage: "Username or password doesn't have engouth length",
            })
        }
        else{
            const hashedpassword = await bcrypt.hash(req.body.password,13);
            const newUser = new User(
                {
                    username,
                    email,
                    password,
                });
        try{
            newUser.save((err)=>{
                //duplicate key
                if ( err && err.code === 11000 ) {
                    res.send('User already exists');
                    res.redirect('/')
                    return;
                }
            });
                //.then(() => res.json('User added!'))
                //.catch(err => res.status(400).json('Error: ' + err));
            
            //Log in user
            const token = jwt.sign({
                user: newUser._id
            }, process.env.JWT_SECRET)

            //send the http cookie

            res.cookie("token", token,{
                httpOnly: true,
            }).send()
        }
        catch(err){
            console.log(err)
        }
        }
});

router.get("/allusers", (req,res) =>{
    User.find((err, users)=>{
        res.send(users)
    });
})

export default  router