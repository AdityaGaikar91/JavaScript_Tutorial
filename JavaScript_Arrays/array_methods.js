const arr = [24];
console.log(arr);
const numbers = new Array(24); // creates an array of length 24
console.log(numbers);

const colors = ["red", "yellow", "green", "orange"];

// length

console.log(colors.length);
console.log(colors[0]);

// Access last element of an array
console.log(colors[colors.length - 1]);

// toString()
console.log(colors.toString());

const result = colors.toString();

console.log(typeof(result));

// join --- using operators

console.log(colors.join(" "));
 