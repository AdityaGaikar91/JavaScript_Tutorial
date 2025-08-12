let dayNumber = 7 //new Date().getDay();
console.log(dayNumber)

// based on day number, give the day
let day;
let msg;
switch(dayNumber) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    // default:
    //     msg = "Please provide correct day number";
}
// if (msg){
//     console.log("Message", msg)
// }
// else{

// }
console.log("Todays day is:", day);