const field = document.getElementById("textField");
console.log(field.value);

field.addEventListener("change", function() {
    sessionStorage.setItem("field", field.value);
})