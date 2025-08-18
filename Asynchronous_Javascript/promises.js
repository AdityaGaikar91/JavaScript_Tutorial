// asynchronous programming

// producing your result --- promise

// consuming promise

const promise = new Promise(function(resolve, reject){
    setTimeout(() => {
    let promiseResult = true;
    
    if (promiseResult){
        resolve("Successful");
    }
    else{
        reject("Rejected");
    }
    }, 1000);
        
})
.then(result => console.log(result))
.catch(err => console.log(err))

console.log("Hello");
