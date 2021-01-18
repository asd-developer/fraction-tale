import express from 'express';
import Fraction from '../models/fractionModel.js';

const router = express.Router();

router.route('/add').post((req,res)=>{
    const fraction = req.body.username;
    const creator = req.body.email;

    const newFraction = new Fraction(
        {
            fraction,
            creator,
        });

    newFraction.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


export default router;