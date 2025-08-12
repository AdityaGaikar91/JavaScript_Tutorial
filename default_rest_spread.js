// Default parameters

function sum(a, b= 1) {
    // b = (b == undefined)? 1 : b;
    return a + b;
}

const result = sum(2);
console.log(result);

// Spread Syntax

function multiply(a, b) {
    return a * b;
}

const array = [2, 3];

const mul = multiply(...array);
console.log("Multiplication of array", mul);


const arr = [1, 2, 3, 4];

const obj = {...arr};

console.log(obj);


// Rest Parameters

function sumOfAllNumber(a, ...args) {

    console.log("a", a);

    let sum = 0;
    for(let value of args){
        sum = sum + value;
    }

    return sum;
}

const resultOfSum = sumOfAllNumber(1, 2, 3, 4);
console.log(resultOfSum);
