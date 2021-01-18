import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim:true,
        minlength: 3
    },
    email: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true, 
        minlength: 5
    },
},
{timestamps: true,}
);

const  User = mongoose.model("user", userSchema);
export default User;