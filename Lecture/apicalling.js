async function abc() {

let data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
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
