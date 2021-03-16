let myVar = '';
let myVar2 = '';

console.log(myVar == myVar2);   //checks for the value

let myObj = {};
let myObj2 = {};

console.log(myObj === myObj2);  //checks for object reference pointer. output: false

let myObjOne = {};
let myObjTwo = myObjOne;

console.log(myObjOne === myObjTwo); //also checks object reference pointer. output: true as both points to the same object.


