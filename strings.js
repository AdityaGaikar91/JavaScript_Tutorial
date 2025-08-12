let firstName = "Aditya1@";
console.log(typeof(firstName));

let secondName = 'Gaikar';
console.log(typeof(secondName));

let sentence = 'My name is "Aditya" and my favourite color is blue'
console.log(sentence);

let sentence1 = "My name is 'Aditya' and my favourite color is blue"
console.log(sentence1);


let sentence2 = "My name is \"Aditya\" and my favourite color is blue";
console.log(sentence2);

let sentence3 = `My name is "Aditya" and my favourite color is blue 
My name is "Aditya" and my favourite color is blue`
console.log(sentence3);


let words = 'It\'s alright';
console.log(words);

console.log(sentence1.length);

// Strings as object
let fullNameliteral = "Aditya Gaikar"
console.log(typeof(fullNameliteral)); // String


let fullName = new String("Aditya Gaikar");
console.log(fullName);
console.log(typeof(fullName)); // object

console.log(fullNameliteral == fullName);
console.log(fullNameliteral === fullName);


let color1 = new String("red");
let color2 = new String("blue");
console.log(color1 === color2);


let heloo = "H e l l o";
console.log(heloo.length);


// comparing two objects in javascripts returns false