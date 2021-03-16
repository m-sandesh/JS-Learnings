//normal function 
// let sayHello = function (userName) {
//     return console.log(`Hello, ${userName}.`);
// };

// sayHello('San');


//arrow function
//not be used with constructors or methods due to coercion in JS.
let sayHello = (userName) => {
    return console.log(`Hello, ${userName}.`);
};

sayHello('San');

//Example ToDoApp

let myDos = [{
    title: 'Study for exam.',
    isDone: false,
}, {
    title: 'Write Code',
    isDone: true,
}, {
    title: 'Sleep well',
    isDone: false,
}];

let DosDone = myDos.filter((individualToDo) => individualToDo.isDone == true);

console.log(DosDone);

console.log('---');

//Assignment - todo that are not done printing only the title of array object.

let myDoList = [{
    title: 'Wake up at 5am',
    isDone: true,
}, {
    title: 'Drink warm water',
    isDone: true,
}, {
    title: 'Write code',
    isDone: true,
}, {
    title: 'Prepare lunch',
    isDone: false,
}, {
    title: 'Study fo exams',
    isDone: false,
}, {
    title: 'Sleep before 11',
    isDone: false,
}];

const arrayFilters = (arrayName) => {
    return arrayName.filter((perArray) => {
        if (perArray.isDone === false)
            return console.log(perArray.title);
    });
};

arrayFilters(myDoList);



