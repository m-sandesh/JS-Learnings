//Import HTTP Module
let http = require('http');

let portNumber = 3000;
let hostName = 'localhost';


// request --> Comes with request details made by client.
// response --> To respond back from server to the client.

let server = http.createServer((req, res) => {  //The fn inside is fired if request is made to the server.
    console.log('Request received from: ' + req.url);   //To log url of the requests made to the server.
    res.writeHeader(200, { 'Content-Type': 'text/plain' });     //Creating response headers.
    res.end('Hello. I am connnected to the server.');      //Serving response to the client.
});

let listenPort = server.listen(portNumber, hostName);
if (listenPort)
    console.log('Server listening at port: ' + portNumber);

// Export not required.
module.exports = {
    server: server,
    listenPort: listenPort,
}



