"use strict";

const arrow_prev = document.querySelector(".slider__arrow_prev");
const arrow_next = document.querySelector(".slider__arrow_next");
const slider = [...document.getElementsByClassName("slider__item")];
const dot = [...document.getElementsByClassName("slider__dot")];
let count = 0;

dot[0].classList.add("slider__dot_active");

function goToSlide(n) {
    slider[count].classList.remove("slider__item_active");
    dot[count].classList.remove("slider__dot_active");
    count = (n + slider.length) % slider.length;
    slider[count].classList.add("slider__item_active");
    dot[count].classList.add("slider__dot_active");
}

arrow_prev.onclick = () => goToSlide(count - 1);
arrow_next.onclick = () => goToSlide(count + 1);

dot.forEach(el => {
    el.onclick = () => {
        const index = dot.indexOf(el);
        goToSlide(index);
    }
});
