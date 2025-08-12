// Every Object has his special property called prototype
// Prototype is a property of an object that allows you to add new properties and methods to existing objects
// It is a way to extend the functionality of objects in JavaScript

// Every JS Object has a special property attached  to it which is called as prototype

const user = {
    name: "Aditya",
    city: "Mumbai",
    printDetails: function() {
        console.log(`Greetings from ${this.name}`);
    }
}
// the protoype is by defaultly attached to every object 
// JavaScript engine attaches prototype to objects by default

const arr = [1, 2, 3, 4, 5]