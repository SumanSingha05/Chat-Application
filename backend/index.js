import server from "./server.js";
import { io } from "./socket/socket.js";
import connectDB from "./config/database.js";
import dotenv from "dotenv"

dotenv.config({});

const PORT = process.env.PORT || 5000;

if(io) {
    server.listen(PORT, () => {
        connectDB();
        console.log(`Server listen at Port ${PORT}`);
    })
}