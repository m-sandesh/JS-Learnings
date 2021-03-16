//Normal Function

function sayHello() {
    console.log('Hello Everyone!');
    
}

sayHello();

//Function Expression (Annonymous Function)
//Used alot in Node JS

let sayBye = function(){
    console.log('Bye!');
    
}

sayBye();


function callTheFunction(fn){   //takes a function as parameter
    fn();
}

callTheFunction(sayBye);