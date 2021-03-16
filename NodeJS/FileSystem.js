// Import the 'fs' File System module.
let fs = require('fs');

// Two types of ReadWrite Method:
// 1. Syncronous R/W   --> Blocks code below it until itself is finished. Causes delay.
// 2. Asyncronous R/W   --> Doesn't block code and continues to fire code without delay.

// Syncrounous Method
let fileData = fs.readFileSync('./SupportFiles/readMeFS.txt', 'utf8');  // ('file_path','unicode');
let writeData = fs.writeFileSync('./SupportFiles/writeMeFS.txt', fileData); //('write_path','write_data');

if (writeData != '')
    console.log('Data of File 1: ' + fileData);
else
    console.log('SyncError');


// Asyncronous Method
fs.readFile('./SupportFiles/readMeFS.txt', 'utf8', (err, data) => {
    if (err != null)
        console.log('AsyncError: ' + err);
    else {
        if (data != '') {
            fs.writeFile('./SupportFiles/writeMeFS.txt', data, (err, result) => {   //Files are Replacable
                if (err != null)
                    console.log('AsyncDataError');
                else if (result)
                    console.log('Good.');
            });
            console.log('Data of File 2: ' + data);
        }
    }
});

console.log('I am printed here to demonstrate the Async Behaviour i.e. Non Code Block.');

// To delete a file
// Comment all above code first.
// fs.unlink('./SupportFiles/writeMeFS.txt', (err) => {
//     if (err != null)
//         console.log('DeleteErr: ' + err);
// });