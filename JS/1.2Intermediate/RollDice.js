let exNumberOne = 22;
let exNumberTwo = 7;
let result = exNumberOne / exNumberTwo;

console.log('Pure Result: ' + result);
console.log('Decimal Cut Result: ' + result.toFixed(2)); //set number of decimal to visible.

console.log('With Ceil function: ' + Math.ceil(result));    //round and raise above decimal.
console.log('With floor function: ' + Math.floor(result));  //round and set below decimal.

console.log('---');

//Dice Example

let upperLimit = 6;
let lowerLimit = 1;

console.log('Dice Rolled:');

console.log(Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit);


// Math.random --> generate a number between 0 and 1
// multiplying random with subtraction of range values will provide randoms from example are 0 to 5.99.
// so to exclude, 1 is added in substraction.
// to include the upto the range value which is 6, lowerLimit is added.
// lastly, floor function is used to cut down all the decimal values without disturbing generated integer.

