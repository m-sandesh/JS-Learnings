console.log("You are using a built in function.");


//Example 1
let name = 'Hello World. I am global.';

let firstFunction = function () {
    console.log(name);

    let subName = 'And I am Local.';
    console.log(subName);
}

firstFunction();


//Example 2
let sayHello = function (username) {
    console.log(`Hello. Welcome ${username}.`);
}

sayHello('Sandesh');


//Example 3
let fullNamer = function (firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}. Welcome to the world.`);
}

fullNamer('Sandesh', 'Maharjan');


//Example 4
let addNumb = function (num1, num2) {
    return num1 + num2;
}


//Printing Methods
let result = addNumb(4, 4);
console.log(result);

console.log(addNumb(4, 4));


//Example 5
let mulNumb = function (num1, num2) {
    return num1 * num2;
}
console.log(mulNumb(3, 5));

//Example 6 : Default Parameters

let shoppingCart = function (name = 'Guest', cartCount = 0) {   //default parameters are passed if no paramters are provided during function call.
    return 'Hello ' + name + '. You have ' + cartCount + ' items in your cart.';
}

console.log(shoppingCart());    //functions can be called without override situations using default parameters.


