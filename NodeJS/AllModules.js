let ArrayCounter = function (arr) {
    console.log(`There are ${arr.length} arrays in the list.`);
}

let AddNumber = function (n1, n2) {
    console.log(`The sum of ${n1} and ${n2} are ${n1 + n2}.`);
}
let piValue = 3.22;

//Module Exports Patterns:

//Method 1 (Export on the fly):
// Example: 
// module.exports.ArrayCounter = function (arr) {
//     console.log(`There are ${arr.length} arrays in the list.`);
// }

// Method 2 (Man in Middle):
// module.exports = ArrayCounter;
// module.exports = AddNumber;
// module.exports = piValue;

// Method 3 (Object Export):
module.exports = {
    ArrayCounter: ArrayCounter,
    AddNumber: AddNumber,
    piValue: piValue,
}

