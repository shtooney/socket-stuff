const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {    

   socket.on('createMessage', (email) => {       
        console.log('createEmail ', email);
    });

    socket.emit('newMessage', {
        from: 'bob@bob.com',
        text: 'Hey are are you!',
        createdAt: new Date().getTime()
    });

    socket.on('disconnect', () => {
        console.log('User is disconnected');
    });
});

server.listen(port, () => {
    console.log(`server is up on port ${port}`);
});


