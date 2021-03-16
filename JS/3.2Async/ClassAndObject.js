class User {
    constructor(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
    }
    getFullName() {
        return `My name is ${this.firstName} ${this.middleName} ${this.lastName}.`;
    }
    editName(newFullName) {
        let nameSplit = newFullName.split(' '); //seperates string based as per defined and returns array.
        this.firstName = nameSplit[0];
        this.middleName = nameSplit[1];
        this.lastName = nameSplit[2];
    }
}

class Teacher extends User {    //Inheritance
    constructor(firstName, middleName, lastName, subjectTeach) {
        super(firstName, middleName, lastName); //must call super as parent constructor. Cannot access parent variables using 'this' keyword until called.
        this.subjectTeach = subjectTeach;
    }
    getFullName() {     //Method overriding
        return `My name is ${this.firstName} ${this.middleName} ${this.lastName}. And I teach ${this.subjectTeach}.`;
    }
}

class Student extends User {
    constructor(firstName, middleName, lastName, subjectLearn, creditScore) {
        super(firstName, middleName, lastName);
        this.subjectLearn = subjectLearn;
        this.creditScore = creditScore;
    }
    getFullName() {
        return `My name is ${this.firstName} ${this.middleName} ${this.lastName}. And I Learn ${this.subjectLearn} with credit score of ${this.creditScore}.`;
    }
}

let John = new User('John', 'Henry', 'Lennon');
let Ram = new Teacher('Ram', 'Henry', 'Lennon', 'Java');
let Hari = new Student('Hari', 'Henry', 'Lennon', 'Python', 123);
let Hari2 = new Student('Hari', 'Henry', 'Lennon', 'Python');   //What happens if a parameter is missing?

John.editName('Johnus Henryl Lennon');

console.log(John.getFullName());
console.log(Ram.getFullName());
console.log(Hari.getFullName());
console.log(Hari2.getFullName());   //Intentional error to see undefined as output.


