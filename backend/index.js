import express from "express";
import dotenv from "dotenv"
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js"
import cookieParser from "cookie-parser"
import messageRoute from "./routes/messageRoute.js"
import cors from "cors";
import { server } from "./socket/socket.js";


dotenv.config({});


const PORT = process.env.PORT || 5000;

//middleware
server.use(express.urlencoded({extended:true}));
server.use(express.json());
server.use(cookieParser());
const corsOption={
    origin:'http://localhost:5173',
    credentials:true
};
server.use(cors(corsOption));

// routes
server.use("/api/v1/user",userRoute);
server.use("/api/v1/message",messageRoute);
// http://localhost:8080/api/v1/user/register;

server.listen(PORT, () => {
    connectDB();
    console.log(`Server listen at Port ${PORT}`);
})