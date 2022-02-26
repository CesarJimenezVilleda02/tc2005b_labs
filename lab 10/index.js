const http = require('http');
const fs = require('fs');

// archivos de clases anteriores
const roboFriends = fs.readFileSync(`${__dirname}/public/robofriends.html`, 'utf-8');
const lab1 = fs.readFileSync(`${__dirname}/public/lab1.html`, 'utf-8');
const lab4 = fs.readFileSync(`${__dirname}/public/lab4.html`, 'utf-8');

const server = http.createServer();

server.on('request', (req, res) => {
    const url = req.url;
    console.log(url);

    // get responses
    if (req.method == 'GET') {
        switch (url) {
            case '/robofriends':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(roboFriends);
                break;
            case '/lab1':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(lab1);
                break;
            case '/lab4':
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(lab4);
                break;
            case '/styles.css':
                // se crea un hilo de lectura que se envia al usario mediante una pipe
                fs.createReadStream(`${__dirname}/public${url}`).pipe(res);
                break;
            case '/index.js':
                fs.createReadStream(`${__dirname}/public${url}`).pipe(res);
                break;
            case '/posts.txt':
                fs.createReadStream(`${__dirname}/data/posts.txt`).pipe(res);
                break;
            default:
                res.writeHead(404, { 'content-type': 'application/json' });
                res.end(
                    `{"message":"Failed: this resource has not been implemented yet"}`
                );
        }
    } else if (req.method == 'POST') {
        let body = [];
        // si se envian datos estos van a venir en chunks que se juntan
        req.on('data', (chunk) => {
            body.push(chunk);
        }).on('end', () => {
            body = Buffer.concat(body).toString();

            // se escribe el chunk
            fs.appendFileSync(`${__dirname}/data/posts.txt`, `\n${body}`);

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('DATA SAVED SUCCESFULLY TO FILE');
        });
    }
});

server.listen(3000, 'localhost', () => {
    console.log('Server waiting for request');
});
