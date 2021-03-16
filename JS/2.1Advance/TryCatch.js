const convertRupees = (dollarValue) => {
    if (typeof dollarValue === 'number') {
        return dollarValue * 114;
    } else {
        throw ('Amount should be in number.');
        // throw Error('Amount should be in number.'); //to display system generated error
    }
};

try {
    const myValue = convertRupees('five');
    console.log(myValue);   //using try catch will not freeze the program else it will freeze.
} catch (error) {
    console.log(error);

}

console.log('I will run even program throws error.');   

