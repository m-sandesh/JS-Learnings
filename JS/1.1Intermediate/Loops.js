const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//Example 1 : For Loop
//Printing Forward
for (let index = 0; index < days.length; index++) { //days.length --> starts count of arrays from 1.
    console.log(days[index]);
}

console.log('---');

//Print Backward
for (let index = days.length - 1; index >= 0; index--) {
    console.log(days[index]);
}

console.log('---');

//Example 2 : For Each
//Here call back funation is to be created and the function can be directly created inside the for each block without a function name.
//foreach brings value of the array in indexDay and its index number in index count.
days.forEach(function (indexDay, indexCount) {
    console.log(`${indexCount + 1}. ${indexDay} is inside the index number: ${indexCount}.`);
});