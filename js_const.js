let a = 100; // Blocked Scoped

// When using the let keyword we can declare the variable empty and assign the value afterwards
let z;

z = 67;

const x =  89; // Blocked Scoped

// But in the case of const we cannot assign the value to the variable after the declaration we should declare and assign at the same location

// const r; // const variables must be initialized always at the time of declaration
// r = 34;

const r = 56;

// x = 100;   // Assignment to const element is not allowed

{
    const y = 89;
    console.log(y);
    
}

console.log(x);

const fruits = ['guava','mango','apple'];

fruits[0] = 'banana';

console.log(fruits);

// fruits = [1, 2, 3];

const user = {
    firstName: "Aditya", lastName: "Gaikar"
};

user.hobby = "teching";

console.log(user);

// user = {};
