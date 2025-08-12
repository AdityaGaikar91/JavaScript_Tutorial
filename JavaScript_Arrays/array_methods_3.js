//concat 

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const arr3 = [11, 12, 13, 14];

// const newArr = arr1.concat(arr2, arr3);

// we can also concat string
const newArr = arr1.concat("4");
console.log(newArr);


// flat
// it does not change the original array
const a = [[1, 2], [3, 4], [5, 6], [7, 8]];

const flattenedArray = a.flat();

console.log("flattened array is", flattenedArray);
console.log(a);


//...............................................
// searching the array

// indexOf

const colors = ["red", "blue", "green", "red", "pink", "red"];
const index = colors.indexOf("blue");
console.log("index", index);


// lastIndexOf
console.log(colors.lastIndexOf("red"));


// includes

console.log( colors.includes("purple"));
