if (false) {
    console.log("I am inside IF block.");
} else if (true) {
    console.log("I am inside double IF.");
} else {
    console.log("Now, I am inside ELSE block.");
}

// Example 
var whoIsHere = "Teacher";

if (whoIsHere === "User") {
    console.log("Welcome, User.");
} else if (whoIsHere === "Teacher") {
    console.log("Welcome, Teacher.")
} else {
    console.log("Could not be verified. Please signup.");
}

//Grade Example
// 10- amazing
// 5- good
// 2 - Poor
// 0 - fail

let myScore = 11;

if (myScore == 10) {
    console.log("You are Awesome.");
} else if (myScore < 10 && myScore >= 5) {
    console.log("You are good.");
} else if (myScore < 5 && myScore >= 3) {
    console.log("Try Hard.");
} else if (myScore < 3 && myScore >= 1) {
    console.log("Too poor to try hard.");
} else if (myScore == 0) {
    console.log("Failed.");
} else {
    console.log("Invalid Score");
}
