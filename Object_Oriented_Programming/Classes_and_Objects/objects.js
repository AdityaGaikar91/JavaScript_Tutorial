// Object Literals
// Methods -----> any function inside an object

const user ={
    names: ["John", "Bob"],
    names2: {
        first: "John",
        last: "Bob"
    },
    age: 23,
    printDetails: function() {
        console.log("Details of user");        
    },
    greet: function() {
        console.log("Greetings!!");        
    }
};

console.log(user.names);
console.log(user.names2.first);
console.log(user.names2.last);
console.log(user.age);
user.printDetails();
user.greet();

// Bracket Notation

console.log(user["age"]);

function logProperty(propertyName){
 console.log(user[propertyName]);
}

logProperty("age");

user["names"]["first"] = "Alice";
user.names.first = "Alice_new"
console.log(user.names.first);

user.age = 15;
console.log(user.age);

user.hobbies = ["listening music", "cooking"];
console.log(user.hobbies);

console.log(user);

user.farewell = function() {
    console.log("GoodBye!!");
}

console.log(user);

user.farewell();