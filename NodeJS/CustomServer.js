const http = require('http');

let portNumber = 3000;
let hostName = 'localhost';
var req;
var res;

let setRequest = (req) => {
    this.req = req;
}

let getRequest = () => { }

let setResponse = (res,) => {
    this.res = res;
}
let getResponse = () => {
    return this.res;
}

let requestListener = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(getResponse());
}

const server = http.createServer(requestListener);
if (server.listen(portNumber, hostName))
    console.log('Custom Server has started at port: ' + portNumber);


module.exports = {
    getResponse: getResponse,
    setResponse: setResponse,
    getRequest: getRequest,
    setRequest: setRequest,
}


