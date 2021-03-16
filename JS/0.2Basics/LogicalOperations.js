// && --> AND Operator (Both True or Both False)
// || --> OR Operator (One or another side true)


let isVerified = true;
let isLoggedIn = true;
let hasPayment = true;

if (isVerified && isLoggedIn && hasPayment) {
    console.log("You have premium account. You can access all.");
} else if (isVerified && !hasPayment) {
    console.log("You are allowed to preview. Please pay.");
} else if (!isVerified || !isLoggedIn) {
    console.log("You are guest.");
}