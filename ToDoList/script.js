const textArea = document.querySelector(".textarea");
console.log(textArea);
const button = document.querySelector(".buttoninput");

const todoList = document.querySelector(".todolist")

button.addEventListener("click", addToDoListItem);

function addToDoListItem() {
    console.log("button clicked");

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("itemall");
    const item = document.createElement("p");
    item.innerHTML = textArea.value;
    item.classList.add("item");

    todoDiv.appendChild(item);

    if(textArea.value == '') return;

    const deleteButton = document.createElement("button");

    deleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#131212ff"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>';
    deleteButton.classList.add("trash-button");

    todoDiv.appendChild(deleteButton);

    console.log(todoDiv)
    
    todoList.appendChild(todoDiv);
    textArea.value = '';

    

    console.log(todoDiv);
}

todoList.addEventListener("click", deleteItem);


function deleteItem(e) {
    const item = e.target;
     

    if (item.classList[0] === "trash-button") {
        const parent = item.parentElement;
        // console.log(parent)
        parent.remove();
    }

    // console.log(item);
}
