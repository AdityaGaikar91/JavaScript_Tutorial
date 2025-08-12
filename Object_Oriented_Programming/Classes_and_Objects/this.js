"use strict"

function abc() {
    console.log("abc");
    console.log(this); // Global Object
}

abc();
// window.abc();

// In function, this keyword points to global object
// But in strict mode, this keyword becomes undefined


// this keyword inside object's method points to that object
// const obj = { 
//     x: 10,
//     y: function() {
//         console.log(this);   
//     }
// }

// obj.y();