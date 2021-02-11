import express from 'express';
import bcrypt from 'bcryptjs'

import User from '../models/userModel.js';

const router = express.Router();

router.get("/test", (req,res) =>{
    res.send("Hello it's working")
})

router.route('/add').post(async (req,res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const hashedpassword = await bcrypt.hash(req.body.password,13);

    const newUser = new User(
        {
            username,
            email,
            password: hashedpassword,
        });
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.get("/allusers", (req,res) =>{
    User.find((err, users)=>{
        res.send(users)
    });
})

export default  router