/**
 * https://dummyjson.com/products/1 
 * https://dummyjson.com/users/1
 * https://dummyjson.com/posts/1
 */

const firstObject = fetch('https://dummyjson.coms/products/1')
                    .then(response => response.json())

const secondObject = fetch('https://dummyjson.coms/users/1')
                     .then(response => response.json())

const thirdObject = fetch('https://dummyjson.coms/posts/1')
                    .then(response => response.json())


// Promise.all([firstObject, secondObject, thirdObject])
// .then(responses=> {
//     for(const response of responses){
//         console.log(response);
//     }
// }).catch(err => console.log(`Failed to fetch ${err}`));

Promise.any([firstObject, secondObject, thirdObject])
.then(responses=> {console.log(responses)})
.catch(err => console.log(`Failed to fetch ${err}`));