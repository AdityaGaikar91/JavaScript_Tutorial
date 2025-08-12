// Use if to execute a block of code if condition is true
// Use else to execute a block of code if condition is false
// Use else if to basically check any new condition
// switch statement

let num = 5;

if (num > 0) {
  console.log("Number is positive");
}
else {
  console.log("Number is Negative");
}


// if else if
//print grade of students, marks > 90 ----> grade 'A', marks > 80 and marks <= 90 ---> 'B'
//marks >70 and marks <= 80 ---> 'C' and below this ---> Fail

let marks = 69;
let grade;

if(marks > 90){
  grade = 'A'
}
else if(marks <= 90 && marks > 80){
  grade = 'B'
}
else if(marks <= 80 && marks > 70){
  grade = 'C'
}
else if(marks < 70){
  grade = 'Fail'
}

console.log("Grade of student is", grade)
// let age = 25;

// if(age == 25 || age == 18 ){
//     console.log("Allowed to enter")
// }
// else
// {
//     console.log("not Allowed")
// }

// Create a menu driven program for switch case to four case like press 1 english press 2 hindi press 3 marathi press 3 kanadi

// Menu-driven switch case in JavaScript

// Show the menu to the user
// let choice = prompt(
//   "Select a Language:\n" +
//   "Press 1 for English\n" +
//   "Press 2 for Hindi\n" +
//   "Press 3 for Marathi\n" +
//   "Press 4 for Kannada"
// );


// choice = parseInt(choice);

// switch (choice) {
//   case 1:
//     alert("English.");
//     break;
//   case 2:
//     alert("Hindi");
//     break;
//   case 3:
//     alert("Marathi");
//     break;
//   case 4:
//     alert("Kanadi");
//     break;
//   default:
//     alert("Invalid choice. Please enter a number between 1 and 4.");
// }

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }