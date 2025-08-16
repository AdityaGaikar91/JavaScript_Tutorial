function createMessage(name, callback) {
    setTimeout(() => {
        const message = `Hello ${name}`;
        callback(message)
     // return message;
    }, 1000)
    
}

function displayMessage(message) {
    console.log(message);
}

const message = createMessage("Jhon", displayMessage);
// displayMessage(message);