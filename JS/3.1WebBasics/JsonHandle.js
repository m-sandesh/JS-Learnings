let student = {
    studentId: 'UA1009',
    studentName: 'Ram',
    studentAge: 20,
};

//Convert above object to string to store in local storage
let studentObjectToString = JSON.stringify(student);

localStorage.setItem('StudentObject', studentObjectToString);

//Convert back string to JSON object from local storage
let studentJSON = JSON.parse(localStorage.getItem('StudentObject'));

//Access data
console.log(studentJSON.studentId);

