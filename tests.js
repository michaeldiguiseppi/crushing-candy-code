function myFn (first, second, third) {
var logFirst = console.log("Reading argument #1: " + first);
var logSecond = console.log("Reading argument #2: " + second);
var logThird = console.log("Reading argument #3: " + third);
var logIntro = console.log("Beginning to read arguments...");
    if (first !== undefined && second !== undefined && third !== undefined) {
        logIntro;
        logFirst;
        logSecond;
        logThird;
    }
    else if (first === undefined && second !== undefined && third === undefined) {
        logIntro;
        logSecond;
    }
    else if (first === undefined && second !== undefined && third !== undefined) {
        logIntro;
        logSecond;
        logThird;
        }
    else if (first !== undefined && second === undefined && third !== undefined) {
        logIntro;
        logFirst;
        logThird;
        }
    else if (first === undefined && second === undefined && third === undefined) {
        console.log("No arguments!");
    };
};

myFn();


        if (first) {
        console.log("Beginning to read arguments...");
        console.log("Reading argument #1: " + first);
        if (second) {
            console.log("Reading argument #2: " + second);
            if (third) {
                console.log("Reading argument #3: " + third);
            }
        } 
    }