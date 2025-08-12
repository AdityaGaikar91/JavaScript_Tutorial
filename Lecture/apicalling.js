async function abc() {

let data = await fetch('https://fakestoreapi.com/products');
let resp = await data.json();
console.log(resp);

}

abc();

// const arr = ["apple", "banana", "apple", "apple", "banana", "orange"];

// let returnedValue = arr.reduce((acc, curr) => {
//     if(acc[curr]){
//         acc[curr]++
//     }
//     else{
//         acc[curr] = 1
//     }

//     return acc;
// }, {}) 

// console.log(returnedValue);
