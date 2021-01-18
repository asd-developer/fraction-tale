import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'

import postRoutes from './routes/postRouter.js';
import userRoutes from './routes/userRouter.js';

const app = express();
dotenv.config();

app.use('/posts', postRoutes);

app.use(bodyParser.json({limit: "10mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "10mb", extended: true}));
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT,()=> console.log(`Server running on PORT: ${PORT}`)))
.catch((error)=> console.log(error.message));

mongoose.set('useFindAndModify', false)

//SET UP ROUTES
app.use("/users", userRoutes);