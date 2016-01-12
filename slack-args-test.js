function myFn (first, second, third) {
    if (arguments.length !== 0) {
        if (arguments.length > 3) {
            console.log("AARG! Too many arguments!");
            console.log(arguments);
            }
        else {
            console.log("Beginning to read arguments...")
            for (var index in arguments) {
                if (arguments[index] !== undefined) {
                    console.log("Reading argument #" + (parseInt(index) + 1) + ": " + arguments[index]);
                }
            }
        }
    }
    else {
        console.log("No arguments!");
    }
};

myFn(undefined, "second", undefined, "fourth");