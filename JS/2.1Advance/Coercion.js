//JS tries to be smart that creates confusion.
//These are logical errors.

//here JS denotes + as concat because there is a string.
console.log('5' + 5);   //result: 10

//here JS denotes - as subtract because - doesnt denote any other alike concat. and also changes string to number.
console.log('5' - 5);   //result: 0

//Cases with boolean
console.log(5 + true);  //denotes add
console.log(5 + false); //denotes add
console.log('5' + true);    //denotes concat
console.log('5' - false);    //denotes subtract

console.log('---');

console.log(typeof 5);  //to know the type of given.
console.log(typeof '5');  //to know the type of given.
console.log(typeof {});  //to know the type of given.


//for if else logics:

//things that define true:
// true
// 1
// ' ' //a white space.
// [] //empty array
// {}  //empty object
// and more...

//things that define false:
// false
// 0
// ''
// null
// undefined
//and many more...





