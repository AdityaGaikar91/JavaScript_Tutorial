// able to access vairiable before even declarinng
console.log(a);
var a = 9;
console.log(a);

// greetings();

// // normal function Declaration
// function greetings() {
//     console.log("Hello");
// }

// function expression
var greetings = () => {
    console.log("Hello"); 
}

greetings();

// greetings: undefined
