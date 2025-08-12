// at()

const numbers = [4, 6, 7, 3, 1];

console.log(numbers[1]);
console.log(numbers.at(1));

// pop --- removes last element from an array
// returns the poped element


const colors = ["red", "blue", "pink"];

const result = colors.pop();

colors.pop();

console.log(result); // pink

console.log(colors); // red

// push --- push element at end of array

const res = colors.push("green");
console.log(res);

const res2 = colors.push("pink");
console.log(res2);

console.log(colors);


// Shifting

// Shift() ---- removes element from begining of an array
// return element which has been removed

const fruits = ["mango", "apple", "grapes"]
const fruit = fruits.shift();
console.log(fruit);
console.log(fruits);
 

// unshift() ---- adds element at beginning of an array
// return new length of an array

const val = fruits.unshift(0,-1);
console.log(val);

console.log(fruits);
