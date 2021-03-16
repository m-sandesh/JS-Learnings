// //Array
// let superHero = ['Iron Man', 'Bat Man', 'Spider Man'];

// //printing styles
// console.log(superHero); //to print all
// console.log(superHero[1]); // to print usng index number
// console.log(superHero[superHero.length - 1]); //to print last value
// console.log('We have ' + superHero.length + ' super heros.'); //using concat
// console.log(`We have ${superHero.length} super heros.`); //console qoute key without using concat. here javascript can be run inside "${//js_script_here}".

//Array in Advance

let numbers = ['One', 'Two', 'Three', 'Four', 'Five'];

//Playing at front
numbers.shift(); //removes indexes at first
console.log(numbers);

console.log(numbers.shift());   //prints removed first index
console.log(numbers.unshift()); //prints number of available indexes

numbers.unshift('New');  //inserts new index at index 0
console.log(numbers);

//Playing at end
numbers.pop();  //removes indexes at last
numbers.pop();  //removes indexes at last
console.log(numbers);

console.log(numbers.pop()); //prints removed last index
console.log(numbers.push());    //prints number of available indexes
console.log(numbers);

numbers.push('NewSix'); //inserts new index at last.
console.log(numbers);

//Playing at middle
let char = ['A', 'B', 'C', 'D', 'E'];

console.log('---');
console.log(char);

char.splice(1, 2, 'New B and C');   // splice (starting_index, index_count_upto, 'new_array')
console.log(char);      //to change in middle of the array.


console.log(char.splice());













