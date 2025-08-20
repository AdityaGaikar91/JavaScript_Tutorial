alert("Hello World");
// prompt()

const fullName = prompt("Enter your Name", "Jhon");


const isConfirm = confirm("Do you want to write your name in console");

if(isConfirm){
console.log(fullName);
}else{
    console.log("Permission denied");
}