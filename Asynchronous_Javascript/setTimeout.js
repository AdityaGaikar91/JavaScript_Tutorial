// JS is a single threaded synchronous language but use of callbacks, promises, event loop, it can behave asynchronously

// setTimeout is webAPI which allows us to execute code after some delay
console.log("Hello Javascript");

setTimeout(() => {
    console.log("Course from Internshala 2");
},2000);

setTimeout(() => {
    console.log("Course from Internshala 1");
},1000);

setTimeout(() => {
    console.log("Course from Internshala 0");
}, 0);

fetch('https://dummyjson.com/products/1')
    .then(res => res.json())
    .then(json => console.log(json))

console.log("Learning Asynchronous Javascript");