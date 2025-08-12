function x() {
    console.log("This is function x");
}

function y(x) {
    x();
    console.log("This is function y");
}

y(x);

// y ---- higher order function --- function which takes another function as a parameter or arguments
// x ---- callback function (function which is passed as parameter to another function)