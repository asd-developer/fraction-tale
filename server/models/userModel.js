import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, minlength: 3},
    email: {type: String, required: true},
    password: {type: String, required: true, minlength: 5},
});

const  User = mongoose.model("user", userSchema);
export default User;