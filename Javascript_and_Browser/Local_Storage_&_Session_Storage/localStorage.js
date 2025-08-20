// localStorage.setItem("name", "Aditya");
// const value = localStorage.getItem("name")
// console.log(value);

// const value1 = localStorage.getItem("name1")
// console.log(value1);

// localStorage.setItem("rollNumber", "12");

// localStorage.removeItem("name");

// localStorage.clear();

localStorage.setItem("name", "Aditya");
localStorage.setItem("rollNumber", "12");
console.log(localStorage.length);

// To get key we will use index of the key value pairs
console.log(localStorage.key(1));

localStorage.hobby = "Teaching";
delete localStorage.hobby;