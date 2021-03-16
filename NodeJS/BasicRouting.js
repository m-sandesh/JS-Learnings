let http = require('http');
let fs = require('fs');

let portNumber = 3000;
let hostName = 'localhost';

let server = http.createServer((req, res) => {
    console.log(req.url);   //To keep logs of url accessed

    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/HTML' });
        fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/HTML' });
        fs.createReadStream(__dirname + '/contact.html', 'utf8').pipe(res);
    } else if (req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'Application/JSON' });
        let myApi = [
            { name: 'Sandesh', age: 21, },
            { name: 'Ram', age: 22, }
        ]
        res.end(JSON.stringify(myApi));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/HTML' });
        fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(res);
    }
});

if (server.listen(portNumber, hostName))
    console.log('Server Listening at Port: ' + portNumber);

// Basic Routing is only for basic use. To overcome the basics EXpress Framework can be used.