// // loop
 
// const fruits = ["Apple", "Banana", "Cherry", "Date"];

// for (let i =0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// // for of loop
// for (let fruit of fruits){
//     console.log(fruit);
    
// }

// // for in loop
// for (let x in fruits){
//     console.log(x); // This will log the index
//     console.log(fruits[x]);
// }  

// // forEach method
// fruits.forEach(function(fruit) {
//     console.log(fruit);
// });


const arr = [5, 10, 15, 20, 25];
let product = 1;
arr.forEach(num => product *= num);
console.log("Product of array elements:", product); // Output: Product of array elements: 37500