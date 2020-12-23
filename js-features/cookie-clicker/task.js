"use strict";

const image = document.getElementById("cookie");
let timeOnClickEnd = Date.now();

image.onclick = function() {
    let timeOnClickStart = Date.now();

    const clicker = document.getElementById("clicker__counter");
    clicker.textContent = +clicker.textContent + 1;
    clicker.textContent % 2 === 0 ? image.width = 200 : image.width = 220;
       
    const speed = document.getElementById("clicker__speed");
    speed.textContent = (1000 / (timeOnClickStart - timeOnClickEnd)).toFixed(2);	

    return timeOnClickEnd = timeOnClickStart;
}
