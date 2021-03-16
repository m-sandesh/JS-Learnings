// alert('Hey! Welcome.');

//Selecting methods.
console.log(document.p);    //get all p tags
console.log(document.getElementById('idOne'));  //get element by id
console.log(document.getElementsByClassName('classOne'));   //get element by class.
console.log(document.querySelector('p'));   //get only first tag/id/class.
console.log(document.querySelectorAll('p'));    //get all tag/id/class in array.
console.log(document.querySelectorAll('#idOne'));   //to get a id in array. 
console.log(document.querySelectorAll('.classOne'));  //to get a class in array.
//if returned in array form, elements can be accessed using array var myElements[index_no.]


//changed some stuff
const myElement = document.querySelector('#idOne');
myElement.textContent = 'I am changed using JS.';


//change all elements using loop
//loop is possible as it is returned in array.
const myElements = document.querySelectorAll('p');
myElements.forEach(function (selectedElement) {
    selectedElement.textContent = 'All are changed with JS';
});

//changing above with arrow function
myElements.forEach((selectedElement) => {
    selectedElement.textContent = 'Now changed with arrow function.'
});

//after this line above loop wont affect new elements as JS follow structure programming.

//adding an element in the body or elesewhere.
const myNewElement = document.createElement('p');
myNewElement.textContent = 'I am newly added.';
document.querySelector('body').appendChild(myNewElement);

//adding element in single line.
document.querySelector('body').appendChild(document.createElement('h6')).textContent = 'I am added in single line.';

//EVENT LISTENERS
document.querySelector('#clickone').addEventListener('click', (anyEvent) => {
    anyEvent.target.textContent = 'I was Clicked.';

});

//tracking alpahbets while typing
document.querySelector('#searchInput').addEventListener('input', (someEvents) => {
    console.log(someEvents.target.value);   //tracks each letters in seperate words
});
//tracking alphabets after typing
document.querySelector('#searchInput').addEventListener('change', (anyEvents) => {
    console.log(anyEvents.target.value);    //tracks change in letters as per change in input.
});

//Form Validation

// using old style function
// function validateUser() {
//     // let user = document.getElementById('userInput').value;
//     // let pass = document.getElementById('passInput').value;

//     let user = document.querySelector('#userInput').value;
//     let pass = document.querySelector('#passInput').value;

//     if (user == 'san' && pass == 'san') {
//         alert('Welcome!');
//     } else {
//         document.querySelector('form').appendChild(document.createElement('p')).textContent = 'Wrong user Inputs';
//     }
// };

//using arrow function
let validateUser = () => {
    let user = document.querySelector('#userInput').value;
    let pass = document.querySelector('#passInput').value;

    if (user == 'san' && pass == 'san') {
        alert('Welcome!');
    } else {
        document.querySelector('form').appendChild(document.createElement('p')).textContent = 'Wrong user Inputs';
    }
};

//advance validation
// - reset form - remove url post of username

function validate() {
    document.querySelector('.userForm').addEventListener('submit', () => {
        event.preventDefault(); //prevents from url post, auto form reset

        console.log(event.target.userName.value);
        console.log(event.target.userPass.value);

        event.target.userName.value = '';
        event.target.userPass.value = '';
    });
};


