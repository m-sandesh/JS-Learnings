let fs = require('fs');

// Two types of Directory ReadWrite Method:
// 1. Syncronous Dir R/W   --> Blocks code below it until itself is finished. Causes delay.
// 2. Asyncronous Dir R/W   --> Doesn't block code and continues to fire code without delay.


// Syncronous Method
fs.mkdirSync('./Sync Example Directory');    //Does not replace
let fileData = fs.readFileSync('./SupportFiles/readMeFS.txt', 'utf8');
fs.writeFileSync('./Sync Example Directory/writeDirFS.txt', fileData);
console.log('Sync Write Success.');

// To remove DIR using Sync Methods
setTimeout(() => {      //Setting timeout for seeing difference.
    fs.unlinkSync('./Sync Example Directory/writeDirFS.txt')
    fs.rmdirSync('./Sync Example Directory');    //Cannot delete directory with files
    console.log('Sync Delete Success.');
}, 3000);


// Asyncronous Method
fs.mkdir('./Async Example Directory', () => {
    fs.readFile('./SupportFiles/readMeFS.txt', (err, data) => {
        fs.writeFile('./Async Example Directory/writeDirFS.txt', data, () => {
            console.log('Async Write Success.');
        });
    });
});

//To remove DIR using Async Methods
setTimeout(() => {      //Setting timeout for seeing difference.
    fs.unlink('./Async Example Directory/writeDirFS.txt', () => {
        fs.rmdir('./Async Example Directory', () => {
            console.log('Async Delete Success.');
        });
    });
}, 3000);

console.log('I am here to demonstrate Async Bahaviour in between these 3 seconds.');

