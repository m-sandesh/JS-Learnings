let fs = require('fs');
let http = require('http');

let server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/HTML' });    //Changing content type to HTML. Otherwise plain text would be displayed.
    // res.end('Hello. I am from server.');

    //Serving plain text
    // myReadStream = fs.createReadStream(__dirname + '/SupportFiles/readableFile.txt','utf8');

    //Serving HTML file
    myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');  // Reading a HTML File.

    myReadStream.pipe(res)  // Sending a HTML/Text File to display (or writes).
});

if (server.listen(3000, 'localhost'))
    console.log('Server started at port: ' + 3000);



