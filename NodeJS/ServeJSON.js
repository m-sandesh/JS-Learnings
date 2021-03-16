let fs = require('fs');
let http = require('http');

let portNumber = 3000;
let hostName = 'localhost';

let server = http.createServer((req, res) => {
    console.log('Request received from: ' + req.url);
    res.writeHead(200, { 'Content-Type': 'application / JSON' });

    let myObject = {
        id: 101,
        name: 'Sandesh',
        department: 'Accounting'
    }

    res.end(JSON.stringify(myObject));  //end accepts only string or buffer chunks.
});

let listenPort = server.listen(portNumber, hostName);

if (listenPort)
    console.log(`Server started at port: ${portNumber}`);



