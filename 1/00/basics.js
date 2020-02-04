// Server

// We need http because we don't have express
const http = require('http');

// We need socket.io -- it is 3rd-party
const socketio = require('socket.io');

// We make an HTTP server with node
const server = http.createServer((req, res) => res.end('I am connected'));

// 
const io = socketio(server);

//const wss = new websocket.Server({ server: server });
const wss = io; // Changed from wss to io
wss.on('connection', (socket, req) => {

    // Changed from ws to socket
    const ws = socket;

    // changed .send() to .emit()
    // ws.send('FROM SERVER: Welcome to the websocket server!!!');
    ws.emit('welcome', 'FROM SERVER: Welcome to the websocket server!!!');
    // socket.emit(...);

    // Send a welcome
    // Listen for a message

    // No change here
    ws.on('message', (msg) => {
        console.log(msg);
    });
    // socket.on(...);
});

const port_num = 8e3;
server.listen(port_num, () => console.log('http://localhost:8000'));