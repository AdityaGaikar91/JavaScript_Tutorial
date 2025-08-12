let text = "    Hello John !!, Hello     ";

console.log("Length of String is ", text.length);

// Strings are immutable ---- original string does not change


// replace
let replacedString = text.replace("Hello", "Hii");
console.log(text);;
console.log(replacedString);

// replaceALL
let replacedAllString = text.replaceAll("Hello", "Hii");
console.log(replacedAllString);



// Split Method
let randomString = "Aditya , Internshala, color";
const randomStringSplit = randomString.split(",");
console.log(randomStringSplit);

// repeat
// console.log(text.repeat(2));


// trim
const trimedString = text.trim();
console.log(trimedString.length);

// trimStart
const trimStartString = text.trimStart();
console.log(trimStartString.length);

// trimEnd
const trimStringEnd = text.trimEnd();
console.log(trimStringEnd.length);


//concat
let firstName = "Aditya ";
let lastName = "Gaikar";

const concatName = firstName.concat(lastName);
console.log(concatName);
