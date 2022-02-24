const http = require('http');
const fs = require('fs');

const roboFriends = fs.readFileSync(`${__dirname}/public/index.html`, 'utf-8');

const server = http.createServer();

server.on('request', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end(roboFriends);
});

server.listen(3000, 'localhost', () => {
    console.log('Server waiting for request');
});
