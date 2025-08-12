let promise = new Promise((resolve, reject) => {
    let condition = false;

    if (condition) {
        resolve("Image selection is successful");
    }
    else {
        reject("Image selection failed");
    }
});
promise
.then((message) => {
    console.log(message);
    // Proceed with adding caption
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Caption added successfully");
        }, 2000);
    });
})
.then((message) => {
    console.log(message);
    // Proceed with uploading image
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Image uploaded successfully");
        }, 3000);
    });
})
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(error);
})
