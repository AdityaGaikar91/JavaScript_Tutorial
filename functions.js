/**  function is a block or piece of code which is use to perform some task and this block of code can be accessed by just calling there function name

to declare function the keyword is use named as function then name of function**/

function sum(num1, num2) {
    return num1 + num2;
}

const result = sum(25, 15);
const result2 = sum(25, 10);

console.log("result", result);
console.log("result2", result2);


function hello() {
    let greeting = "Hello";
    console.log(greeting);
}

hello();