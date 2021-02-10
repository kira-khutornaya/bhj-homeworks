"use strict";

const button = document.createElement("button");
button.innerText = "Очистить содержимое";
button.style.display = "block";
document.body.append(button);

const editor = document.getElementById("editor");

editor.addEventListener("keyup", () => {
    localStorage.setItem("text", editor.value);
})

if (localStorage.getItem("text")) editor.value = localStorage.getItem("text");

button.addEventListener("click", () => {
    editor.value = "";
    localStorage.clear();
})
