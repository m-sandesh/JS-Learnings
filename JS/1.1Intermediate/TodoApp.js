let DoListBottom = [];
let DoListTop = [];

//Pushing from bottom
DoListBottom.push('Learn More');
DoListBottom.push('Make the bed');
DoListBottom.push('Buy milk and bread');
DoListBottom.push('Heat the cup');
DoListBottom.push('Check mails before bed');

//Using for Each
DoListBottom.forEach(function (myTodo, index) {
    console.log(`In number ${index + 1}, You have to ${myTodo}.`);
});

console.log('---');

//Using for loop
for (index = 0; index <= DoListBottom.length - 1; index++) {
    console.log(`In number ${index + 1}, You have to ${DoListBottom[index]}.`);
}

console.log('---');


//adding from top
DoListTop.unshift('Make the bed');
DoListTop.unshift('Buy milk');
DoListTop.unshift('Buy bread');
DoListTop.unshift('Drink coffee');
DoListTop.unshift('Get to work');

//using for each
DoListTop.forEach(function (myTodo, index) {
    console.log(`In number ${index + 1}, You have to ${myTodo}.`);
});

console.log('---');

//Using for loop
for (index = 0; index < DoListTop.length; index++) {
    console.log(`In number ${index + 1}, You have to ${DoListTop[index]}.`);
}
