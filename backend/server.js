import express from "express";
import http from "http";
import userRoute from "./routes/userRoute.js"
import messageRoute from "./routes/messageRoute.js"
import cookieParser from "cookie-parser"
import cors from "cors";

const app = express();


const server = http.createServer(app);

//middleware
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());


// routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);

export default server;