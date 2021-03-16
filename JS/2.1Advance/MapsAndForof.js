var Ram = {
    name: 'Ram',
    age: 21,
    isActive: true,
};

var Hari = {
    name: 'Hari',
    age: 24,
    isActive: true,
};

var Sita = {
    name: 'Sita',
    age: 30,
    isActive: false,
};

let myUsers = new Map();    //Creates a map of objects. It is iteratable using for of loops.

myUsers.set('RamDetails', Ram);
myUsers.set('HariDetails', Hari);
myUsers.set('SitaDetails', Sita);

console.log(myUsers.keys());

console.log(myUsers.get('RamDetails'));

//Can be specially used with forOf and ForEach loops.

//Example with for of loop.
//Only to get keys
for (const allKeys of myUsers.keys()) {
    console.log(allKeys);
}
//only the values
for (const allValues of myUsers.values()) {
    console.log(allValues);
}
//for both in one loop  //provides array of both
for (const [needKeys, needValues] of myUsers.entries()) {
    console.log(`The key: ${needKeys} have name: ${needValues.name}`);
}

//Example with for each loop
//for value only
myUsers.forEach(myValue => {
    console.log(myValue)
});

//for both //syntax map.forEach((value_var,key_var) => {//code})
myUsers.forEach((theValue, theKey) => {
    console.log(`The key: ${theKey} have name: ${theValue.name}`)
});

console.log('---');

//Assignment - Maps of Array of Arrays 

let arrofArr = [['One', '1'], ['Two', '2'], ['Three', '3']];

let mapArray = new Map(arrofArr);
console.log(mapArray); //preview of the map of first level array.

for (const [arrKey, arrValue] of mapArray) {
    console.log(arrKey + ' : ' + arrValue);
}


