// API --- cient- request - server

const promiseObject = fetch('https://dummyjson.com/products')
console.log(promiseObject);

promiseObject.then(response => response.json())
.then(result => console.log(result))
.catch(err => console.log(err));

console.log("started request");