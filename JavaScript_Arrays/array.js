let fruit1 = "Mango";
let fruit2 = "Apple";
let fruit3 = "Guava";

// Array literal

const fruits = ["Mango", "Apple", "Guava"];

// Indexes --- access any element inside an array

// Array follows zero based indexing

console.log(fruits[0]); // Mango
console.log(fruits[1]); // Apple
console.log(fruits[2]); // Guava

fruits[0] = "Grapes";
console.log(fruits[0]);

fruits[3] = "Orange";
console.log(fruits[3]);

console.log("My array is", typeof(fruits));


const colors = [];
colors[0] = "red";
colors[1] = "yellow";

console.log("Colors array", colors);


// Creating an array using new keyword
const numbers = new Array(1, 2, 3, 4, 5);
console.log("numbers", numbers);

// This will return as object
console.log("Type of numbers array is ", typeof(numbers));
