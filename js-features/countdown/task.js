"use strict";

// Базовый уровень

const timer = document.getElementById("timer");
//
//const countdown = setInterval(() => {
//    timer.textContent--;
//
//    if (timer.textContent == 0) {
//        alert("Вы победили в конкурсе!");
//        clearInterval(countdown);
//    }
//}, 1000);


// Повышенный уровень сложности

const countdownTime = Date.now() + 65000; 

function checkZero(timeOfUnit) {
    return timeOfUnit < 10 ? "0" + timeOfUnit : timeOfUnit;
}

const countdown = setInterval(() => {
    const now = Date.now();
    let gap = countdownTime - now;

    let hours = checkZero(parseInt(gap / 1000 / 60 / 60) % 24);
    let minutes = checkZero(parseInt(gap / 1000 / 60) % 60);
    let seconds = checkZero(parseInt(gap / 1000) % 60);

    timer.textContent = `${hours}:${minutes}:${seconds}`;
	
    if (hours == 0 && minutes == 0 && seconds == 0) {
        alert("Вы победили в конкурсе!");
//      const imageDownload = document.getElementById("link");
//      imageDownload.click();
        window.location = "https://netology.ru/";
        clearInterval(countdown);
    }
}, 1000);
