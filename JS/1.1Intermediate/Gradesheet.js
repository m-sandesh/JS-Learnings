//It can check if inputs are integer or not, obtained marks is less than total marks, check grade.

let calcGrade = function (obtainedTotal, allTotal) {
    if (Number.isInteger(obtainedTotal) && Number.isInteger(allTotal) && obtainedTotal <= allTotal) {
        let myPercentage = (obtainedTotal / allTotal) * 100;

        let myGrade;

        if (myPercentage >= 90) {
            myGrade = 'A';
        } else if (myPercentage >= 80) {
            myGrade = 'B';
        } else if (myPercentage >= 60) {
            myGrade = 'C';
        } else if (myPercentage >= 50) {
            myGrade = 'D';
        } else if (myPercentage >= 40) {
            myGrade = 'E';
        } else if (myPercentage < 40) {
            myGrade = 'F';
        } else {
            return 'Grade Error.';
        }
        return `You scored: ${myPercentage}. Your Grade is ${myGrade}.`;

    } else {
        return 'Invalid Marks or Numbers.';
    }
}

console.log(calcGrade(450, 500));
