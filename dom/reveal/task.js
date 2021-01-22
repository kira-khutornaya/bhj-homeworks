"use strict";

const reveal = [...document.getElementsByClassName("reveal")];

function isInViewport(element) {
    const viewportHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    return elementTop < viewportHeight && elementTop >= 0 ? true : false;
}

window.addEventListener("scroll", () => {
    reveal.forEach(el => {
        isInViewport(el) ? el.classList.add("reveal_active") : el.classList.remove("reveal_active");
    })
})
