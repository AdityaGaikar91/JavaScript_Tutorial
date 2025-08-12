// for loop
// for in
// for of
// while
// do while

// 1. for loop


// for(i = 0; i <= 100; i++){
//     console.log(i);
// }



//2. for in loop

// here we loop through each key of an object

// const user = {
//     harry: 56, 
//     Akash: 67,
//     Suraj:78
// };

// for(key in user) {
//     console.log(user[key]); // user[Harry] = 56  so here user at harry and the valu is 56 so it will print the value of an key inside the object
// }

// So when we have to itrrate through key of an object we will use for in loop





// 3. for of loop

// So when you want to iterate through values of an object like array you use for of loop

// const fruits = ['guava', 'kevi', 'apple', 'mango'];

// for(let fruit of fruits){
//     console.log(fruit);
// }



// 4. while loop

// So while loop is used to execute a certain line of code when the conditions are meet.

//Example: Print values from 1 to 100

// let value = 1;
// while(value <= 10){
//     console.log(value)
//     value++;
// }




// do while loop

// So her in do while loop we first atleast execute the code in do once and then check for condition are meet or not in while.

let num = 1

do {
    console.log(num);
    num++;
}while(num < 5);

// so here it is first executing the code inside do the checking the condition and breaking the execution when the conditions are meet
