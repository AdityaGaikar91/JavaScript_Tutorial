var a = function() {

}

function x(){
    console.log("x is a function");
}

function y(x) {
    return x;
}

const func = y(x);
func();

// Functions are first-class citizens, which means they can be assigned to variables, passed as arguments to other functions, and returned from functions, just like any other value or object. This allows for higher-order functions and functional programming techniques.