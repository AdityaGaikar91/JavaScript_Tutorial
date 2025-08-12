// find method ---- returns first element of array which satisfies condition

const arr = [1, 2, 3, 7, 8, 45, 9];

// find any even number

const evenNumber = arr.find(element => element % 2 === 0);
console.log(evenNumber);

// findLast

const lastEvenNumber = arr.findLast(ele => ele % 2 === 0)
console.log(lastEvenNumber);

// findIndex

const evenNumberIndex = arr.findIndex(ele => ele % 2 === 0)
console.log(evenNumberIndex);

// findLastIndex

const evenNumberLastIndex = arr.findLastIndex(ele => ele % 2 === 0)
console.log(evenNumberLastIndex);


const arr2 = ["apple", "banana", "cherry", "date"];
for(const fruit of arr2){
    console.log(fruit);
    
}