// ES6 -- EcmaScript 2015

var a = 100; // Global Scoprd Variables

let x = 34; // Block Scoped Variables

// When we decalare variables using let keyword they cannot be redeclared in the same scope

// let x = 39; wrong approch because x is already declared 

// but we can assign the different value to this same variable again

x = 39;

// But when using let we can declared this same variable in diffrent block or scope
{
    let x = 100;
    var a = 89;
    let z = 67;
    console.log(z);
    console.log(x);
    
    // console.log(a);
}

console.log(a);
console.log(x)
// console.log(z);

// Summary
// let keyword was introduced in ES6
// let varisbles are block scoped varaibles
// Cannot redeclare these variables in same scoped