const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('draw', (data) => {
        socket.broadcast.emit('draw', data);
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
