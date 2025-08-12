// async code example for posting on instagram
// 1st image selection for settimeout of 5 seconds
function imageSelection() {
    setTimeout(() => {
        console.log("Image 1 selected");
        // 2nd image selection after 3 seconds
        setTimeout(() => {
            console.log("Image 2 selected");
        }, 3000);
    }, 5000);
}



// Adding Caption then after 6 second adding caption completed
function addCaption() {
    setTimeout(() => {
        console.log("adding caption...");
        // After 2 seconds
        setTimeout(() => {
            console.log("adding caption completed");
        }, 2000);
    }, 6000);
}

// now when caption is added then we will start the uploading image and then after 5 seconds image uploaded
function uploadImage() {
    console.log("Image uploading...")
    setTimeout(() => {
        console.log("Image uploaded successfully");
        // After 5 seconds
    }, 5000);
}