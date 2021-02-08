"use strict";

const progress = document.getElementById("progress");

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let input = this.elements.file,
        file = input.files[0];

    if (file) upload(file);
})

function upload(file) {
    let xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress", event => {
        progress.setAttribute("max", event.total);
        progress.value = event.loaded;
    })

    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.send(file);
}
