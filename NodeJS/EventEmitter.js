let AllEvents = require('events'); //Built in modules dont require a path. (PS: JS IS CASE SENSATIVE.)

//Event Emitter -> Create a custom event to emit.
let myEmitter = new AllEvents.EventEmitter();  //Assigning object to load the constructor.

myEmitter.on('myCustomClick', (message) => {    //Creating a 'On' custom event with a callback function.
    console.log('Hello, ' + message);
})

myEmitter.emit('myCustomClick', 'I am clicked.') //Calling an event ('event_name','parameters').


//Example with OOP: Person Speaks

let AllUtil = require('util');

// A Constructor without class
// let Person = function (name) {
//     this.name = name;
// };

class Person {
    constructor(name) {
        this.name = name;
    }
}

AllUtil.inherits(Person, AllEvents.EventEmitter);

let Ram = new Person('Ram');
let Hari = new Person('Hari');
let Sita = new Person('Sita');

let AllPeople = [Ram, Hari, Sita];

AllPeople.forEach((currentPerson) => {
    currentPerson.on('speak', (message) => {
        console.log(currentPerson.name + ' says, ' + message + '.');
    });
});

Ram.emit('speak', 'Hello, I am Ram.');
Hari.emit('speak', 'Hello, I am Hari.');



