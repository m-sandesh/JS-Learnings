
let patternAsc = function () {
    for (x = 1; x <= 5; x++) {
        for (j = 1; j <= x; j++) {
            // console.log('*');    //gives new line every time with output
            process.stdout.write('*')
        }
        console.log();
    }
};

let patternDsc = function () {
    for (x = 5; x >= 1; x--) {
        for (j = 1; j <= x; j++) {
            // console.log('*');    //gives new line every time with output
            process.stdout.write('*')
        }
        console.log();
    }
};

let patternLeftStart = function () {
    for (x = 1; x <= 5; x++) {
        for (j = 1; j <= x; j++) {
            // console.log('*');    //gives new line every time with output
            process.stdout.write('*')
        }
        console.log();  //gives new line automatically.
    };
};

let patternRightStart = function () {
    for (x = 5; x >= 1; x--) {
        for (j = 1; j <= 5; j++) {
            if (j < x)
                process.stdout.write(' ');
            else
                process.stdout.write('*');
        };
        console.log(' ');
    };
};

let patternOneofEach = function () {
    for (x = 5; x >= 1; x--) {
        for (j = 1; j <= x; j++) {
            process.stdout.write(' ');
            for (k = x; k <= 5; k++)
                process.stdout.write('*');
        };
        console.log();
    };
};


patternAsc();
patternDsc();
patternLeftStart();
patternRightStart();
patternOneofEach();