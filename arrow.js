//ES5
// Normal function

// sum();

// function sum(a, b) {
//     console.log("Sum of two number is ");
//     return a + b;
// }


//ES6 // Function Expressions
const sum = (a, b) =>{ 
    console.log("Sum of two number is ");
    a + b;
}

const result = sum();
console.log("result", result);
