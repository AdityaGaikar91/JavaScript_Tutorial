// Immediately Invoked Function Expressions

//self invoking functions
(function hello() {
    console.log("Hello");
})();

(function abc() {
    var a = 10;
})();

// functions which are called automatically which are self invoked or we don't have to call them from outside those are immediately invoked function expressions

// The main purpose of using an IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world.