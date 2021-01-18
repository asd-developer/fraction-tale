import express from 'express';
import User from '../models/userModel.js';

const router = express.Router();

router.get("/test", (req,res) =>{
    res.send("Hello it's working")
})

router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new User(
        {
            username,
            email,
            password,
        });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


export default  router