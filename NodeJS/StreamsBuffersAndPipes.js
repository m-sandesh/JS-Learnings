let fs = require('fs');
// let myServer = require('./Server.js');
let myCustomServer = require('./CustomServer.js');

// Using Streams
let myReadStream = fs.createReadStream(__dirname + '/SupportFiles/readableFile.txt', '');   //Without encoding, data is shown as buffers which will not be encoded in readable format.
let myWriteStream = fs.createWriteStream(__dirname + '/SupportFiles/writeMe.txt');    //A writable stream

myReadStream.on('data', (dataChunks) => {   //Fires the event upon data is recieved in myReadStream as CreateReadStream fn is an Event Emitter.
    console.log('New chunk of data recieved:');
    console.log(dataChunks);
    console.log('\nKeep encoding as UTF8 to show data instead of buffer data'); //Change encode above.

    myWriteStream.write(dataChunks);  //Start Writing streams. Writes plain text data even if encoding is not defined.
});


// Using Pipes
// Same as Streams but it is the duplex version.
// Reads a stream and writes a stream at the same time.
// The code is same but filename is changed to show the file created proof.
myWriteStreamAsPipe = fs.createWriteStream(__dirname + '/SupportFiles/writeMePipe.txt');
myReadStream.pipe(myWriteStreamAsPipe);

// Sending Stream through server
myReadStream = fs.createReadStream(__dirname + '/SupportFiles/readableFile.txt', 'utf8');

// myReadStream.pipe(res);     //Not working as server response is not accessibles.

console.log('I am here to demonstrate Async Behaviour.');
