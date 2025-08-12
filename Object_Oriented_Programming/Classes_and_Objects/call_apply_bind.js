// to share the method of an object to another objects
// to share a function with other object we use call, apply, and bind

// Function Sharing

const user = {
    firstName: "Aditya",
    lastName: "Gaikar",
    // printFullName: function() {
    //     console.log(`My name is ${this.firstName} ${this.lastName}`);
    // }
}

let printFullName = function(color, hobby) {
        console.log(`My name is ${this.firstName} ${this.lastName} and my favorate color is ${color}`);
        console.log(`My Hobby is ${hobby}`);
        
    }

printFullName.call(user, "Orange", "playing Football");
printFullName.apply(user, ["Orange", "playing Football"]);
// user.printFullName();

const user2 = {
    firstName: "Mark",
    lastName: "ZuckerBerg"
}

// user.printFullName.call(user2);
printFullName.call(user2, "Red", "playing Guitar");
// printFullName.apply(user2, ["Red", "playing Guitar"]);

const printName = printFullName.bind(user2, "Red", "playing Guitar" ); // This will not call the function this will return a function
console.log(printName);
printName();