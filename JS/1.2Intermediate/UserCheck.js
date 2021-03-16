let userName = 'san@gmail.com';
let userPass = '@soldier.san';

let userNameValidate = function (userNameString) {
    if ((userNameString.includes('@')) && (userNameString.length >= 6)) {
        return true;
    } else {
        return false;
    }
}

let userPassValidate = function (userPassString) {
    let specialChars = ['@', '.'];

    if ((userPassString.includes(specialChars[0])) && (userPassString.length >= 8)) {
        return true;
    } else {
        return false;
    }
};

//merge both functions in single function.
let validateUser = function (userNameString, userPassString) {
    if ((userNameValidate(userNameString) == true) && (userPassValidate(userPassString) == true)) {
        console.log('Welcome ' + userNameString);
    } else {
        console.log('Sorry, Validation failed.');
    }
};

validateUser(userName, userPass);

