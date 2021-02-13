import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import { createServer } from "http";
import { Server } from "socket.io";

import fractionRoutes from './routes/fractionRouter.js';
import userRoutes from './routes/userRouter.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "10mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "10mb", extended: true}));
app.use(cors());


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT,()=> console.log(`Server running on PORT: ${PORT}`)))
.catch((error)=> console.log(error.message));

mongoose.set('useFindAndModify', false)

const httpServer = createServer();

const io = new Server(httpServer,{
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true
    }
  });

io.on("connection", (socket) => {
    console.log(socket.id)
    socket.on("register user", user => {
      
      console.log(user.username, "was registered");
    })
});

httpServer.listen(4000);

//SET UP ROUTES
app.use("/users", userRoutes);
app.use("/fraction", fractionRoutes);

