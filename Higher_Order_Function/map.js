// map --- higher oder function is used to transform contents of an array

const arr = [1, 2, 3, 4, 5];

function square(num){
    return num * num;
}

const squaredArray = arr.map(square);

console.log(squaredArray); // [1, 4, 9, 16, 25]



const doubledArray = arr.map(function double(num) {
    // return num + num;
    return num * 2;
}); // here the map is higher oder function which is taking another function as parameter
console.log(doubledArray); // [2, 4, 6, 8, 10]

const doubleArray = arr.map(num => num * 2);
console.log("double of array elements using arrow function: ",doubleArray);

const users = [
    {
        firstName: "Aditya",
        lastName: "Gaikar",
        age: "21"
    },
    {
        firstName: "Rohit",
        lastName: "kamble",
        age: "22"
    }
]

const firstNames = users.map(user => user.firstName);
console.log(firstNames);
