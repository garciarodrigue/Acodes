// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('New client connected');

    // Broadcast a new user connected message to all clients
    socket.broadcast.emit('user-connected', socket.id);

    socket.on('disconnect', () => {
        console.log('Client disconnected');
        // Broadcast a user disconnected message to all clients
        socket.broadcast.emit('user-disconnected', socket.id);
    });

    // Listen for voice messages
    socket.on('voice-message', (data) => {
        // Broadcast the voice message to all clients except the sender
        socket.broadcast.emit('voice-message', {
            senderId: socket.id,
            data: data
        });
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});