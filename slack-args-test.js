function myFn (first, second, third) {
    if (arguments.length !== 0) {
            console.log("Beginning to read arguments...")
            for (var index in arguments) {
                if (parseInt(index) > 2) {
                    console.log("AARG! Too many arguments!");
                    console.log(arguments);
                }
                else if (arguments[index] !== undefined) {
                    console.log("Reading argument #" + (parseInt(index) + 1) + ": " + arguments[index]);
                }
            }
        }
    else {
        console.log("No arguments!");
    }
};

myFn();