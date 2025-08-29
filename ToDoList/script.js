const textarea = document.querySelector(".textarea");
console.log(textarea);
const button = document.querySelector(".buttoninput");

button.addEventListener("click", addToDoListItem);

function addToDoListItem() {
    console.log("button clicked");

    const todoDiv = document.createElement("div");
    const item = document.createElement("p");

    
}
