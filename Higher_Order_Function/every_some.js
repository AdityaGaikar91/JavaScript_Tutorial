// every --- it takes a function and executes that function for every array element and it returns true if all array elements matches the condition or satisfies the condition which is present in the function

// check every person in array is adult or not

function checkAge(age) {
    if (age >= 18){
        console.log("Person is adult");
    }else{
        console.log("Person is not Adult");
    }
}

checkAge(19);

const ages = [12, 19, 45, 67, 89, 23];

const isAdult = ages.every(age => age >= 18);
console.log(isAdult);


// some --- even if one element in an array satisfies condition, it will return true

// Is anyone a kid
const isKid = ages.some(age => age < 18)
console.log("is Kid", isKid);

// the original array is not modified
console.log(ages);
