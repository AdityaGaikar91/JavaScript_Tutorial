var x = 10;
let y = 40;
{
    var x = 100;
    let y = 20;
    const z = 30;
    console.log(x);
    console.log(y);
    console.log(z);
}

console.log(y);
console.log(x);


// So as we know var is Global Scoped and here we first declared x using var keyword as 10 then created a block scope where inside it again did the same but changed the value of x to 100 so when we print the value of x the output would be 100 this is called shadowing.

// let a = 200;
// {
//     var a = 200;
// }// this is called as illegal shadowing because if the variable is declared using let key word the same variable cannot be decalared using another keyword in block scope