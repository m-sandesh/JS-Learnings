//array of object is used for advancement.

let myToDo = [{
    doTitle: 'Wake up',
    isDone: true,
}, {
    doTitle: 'Eat',
    isDone: false,
}, {
    doTitle: 'Go sleep',
    isDone: false,
}]

let searchArray = function (arrayName, searchElement) {
    const indexFound = arrayName.findIndex(function (arrayName) {
        return arrayName.doTitle.toLowerCase() == searchElement.toLowerCase();
    });
    return myToDo[indexFound].doTitle;
};

console.log(searchArray(myToDo, 'go sleep'));

