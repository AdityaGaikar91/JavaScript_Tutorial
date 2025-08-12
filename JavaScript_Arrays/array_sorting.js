// sort ---- sort an array alphabetically

const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// fruits.sort();
// console.log(fruits); // Output: [ 'Apple', 'Banana', 'Mango', 'Orange' ]

// toSorted ---- new array sorted without modifying the original array
const sortedFruits = fruits.toSorted();
console.log(sortedFruits); // Output: [ 'Apple', 'Banana', 'Mango', 'Orange' ]
console.log(fruits); // Output: [ 'Banana', 'Orange', 'Apple', 'Mango' ]


// reverse ---- reverse the order of an array

// fruits.reverse();
// console.log(fruits); // Output: [ 'Mango', 'Apple', 'Orange', 'Banana' ]

// toReversed ---- new array with the order reversed without modifying the original array
const reversedFruits = fruits.toReversed();
console.log(reversedFruits); // Output: [ 'Banana', 'Orange', 'Apple', 'Mango' ]
console.log(fruits); // Output: [ 'Banana', 'Orange', 'Apple', 'Mango' ]


// if we want to sort the array in descending order, we can first sort the array and the reverse it

const cars = ['BMW', 'Audi', 'Mercedes', 'Toyota'];
console.log();
cars.sort();
cars.reverse();

console.log(cars); // Output: [ 'Toyota', 'Mercedes', 'BMW', 'Audi' ]

// if we want to sort the array of numbers we can use the sort method with a compare function

const numbers = [34, 112, 45];
numbers.sort(); // here it will sort as strings using Unicode code points
console.log(numbers); // Output: [ 112, 34, 45 ]

numbers.sort(function(a, b) {return a - b; }); // sort in ascending order // 34 - 112 = neagative, keep a before b  // postive means b before a
console.log(numbers); // Output: [ 34, 45, 112 ]

console.log("Minimum value in the array is: ",numbers[0]); // Output: 34 minimum value in the array

console.log("Maximum value in the array is: ", numbers[numbers.length - 1]); // Output: 112 maximum value in the array

// sort in descending order
numbers.sort(function(a, b) {return b - a; });
console.log(numbers); // Output: [ 112, 45, 34 ]


// Math.min and Math.max can also be used to find minimum and maximum values in an array
console.log(Math.min(...numbers));
console.log(Math.max(...numbers));
