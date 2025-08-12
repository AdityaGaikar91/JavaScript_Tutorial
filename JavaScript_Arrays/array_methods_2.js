//delete

const arr = ["Aditya", "Omii", "Dhagya", "Zunzu"];

delete arr[1];

console.log(arr);

//...............................................
// splice

// so here the splice did'nt maintained the empty space the element is fully removed
// So instead of delete we can use splice to remove elements from array

// we can also use splice for adding elements


const a = [1, 2, 3, 4, 5];

// a.splice(0, 2); // modifies the original array

// a.splice(2, 1);

a.splice(2, 1, 5, 3, 7, 8)
console.log(a);


//...............................................
// toSpliced
// it doesn't change the original array
// const newArr = a.toSpliced(2, 0, 4, 5, 6);
// console.log(newArr);

// console.log(a);


// ..............................................
// slice
// if we want a specific group of elements from array we can use slice
// where we can pass parameters like 1st from which index you want to the desired element 
// const b = [3, 4, 5, 6, 7];

// const newArray = b.slice(2, 4);

// console.log(newArray);

// console.log(b);
