function firstFunction(val, callback) {
    setTimeout(() => {
        let result = val + 1;
        callback(result);
        // return val + 1;
    }, 1000);
    
}

function secondFunction(val, callback) {
    let result = val + 2;
    callback(result);
    // return val + 2;
}

function thirdFunction(val, callback) {
    let result = val + 3;
    callback(result)
    // return val + 3;
}

// function doOperation() {
//     let result = 0;
//     result = firstFunction(result);
//     result = secondFunction(result);
//     result = thirdFunction(result);
//     console.log(`result ${result}`);
    
// }

function doOperation() {
    firstFunction(0, (result) => {
        secondFunction(result, (result1) => {
            thirdFunction(result1, (result2) => {
                console.log(`result ${result2}`); 
            })
        })
    })
}

doOperation();