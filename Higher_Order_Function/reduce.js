// const arr = [1, 2, 3, 4, 5];

// let sum = 0;

// for(let i=0; i<arr.length; i++){
//     sum = sum + arr[i];
// }
// console.log(sum);

// // reduce

// // using arrow function
// // const sumOfArray = arr.reduce((acc, curr) => acc = acc + curr)
// const sumOfArray = arr.reduce(function(acc, curr) {
//         return acc = acc + curr;
// }, 0)
// console.log(sumOfArray);


// // maximum element in array
// let max = arr[0];

// for(let i = 1; i< arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }
// }

// console.log(max);

// // using reduce
// const maxvalue = arr.reduce(function(max, curr){
//     if(curr>max){
//         max = curr
//     }
//     return max;
// }, 0)

// console.log(maxvalue);


let arr3 = [1,2,45,67,43]
const sum1 = arr3.reduce(function(acc, curr){
    return acc + curr;
}, 0)
console.log(sum1);