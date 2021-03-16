let globalMe = "I am Global";

if (true) {
    let localMe = "I am Local";
    var localMeVar = "I am Local with var";
    console.log(globalMe);
    console.log(localMe);
}
console.log(globalMe); //global is global.
// console.log(localMe); //Local values cannot be accessed outside the block
console.log(localMeVar); //Use of 'var' leaks the data even being a local.

console.log("---");

//King's territory problem.

//no problem code
let king = "Ram"

if (true) {
    let king = "Hari"
    console.log(king);
    if (true) {
        let king = "Sita"
        console.log(king);
    }
}
if (true) {
    console.log(king);   
}

console.log("---");

//problem code
// let king = "Ram"

if (true) {
    // let king = "Hari"
    console.log(king);
    if (true) {
        king = "Sita"
        console.log(king);
    }
}
if (true) {
    console.log(king);   
}

//Here the variables should always be declared using let, var or const. If not declared, above problem may arrise causing big issues later. Here the issue is, if a variable is not declared and still tried to be accessed then it would be automatically declared as global variable which might be cause to leak the data from the block.


