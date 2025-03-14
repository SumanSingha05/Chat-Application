import { Server } from "socket.io";
import server from "../server.js";


const io = new Server(server, {
    cors: {
    origin: "*",
  },
});

const userSocketMap = {}; //{userId->socketId}

io.on('connection', (socket) => {
    console.log('user connected', socket.id);
  
    const userId = socket.handshake.query.userId
    if(userId != undefined) {
        userSocketMap[userId] = socket.id;
    }

    io.emit('getOnlineUsers', Object.keys(userSocketMap)); // emit = send backend data to frontend

    socket.on('disconnect', () => {
        console.log('user disconnected', socket.id);
        delete userSocketMap[userId];
        io.emit('getOnlineUsers', Object.keys(userSocketMap));

    })

    })

export {io};