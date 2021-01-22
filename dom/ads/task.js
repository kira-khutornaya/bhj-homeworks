"use strict";

const rotators = [...document.getElementsByClassName("rotator")];

rotators.forEach(el => {
    let items = el.getElementsByClassName("rotator__case");
    let count = 0;
    let interval = items[count].getAttribute("data-speed");
    let color = items[count].getAttribute("data-color");
    items[count].style.color = color;

    function changeCase() {
        items[count].classList.remove("rotator__case_active");
        count === items.length - 1 ? count = 0 : count++;
        items[count].classList.add("rotator__case_active");

        color = items[count].getAttribute("data-color");
        items[count].style.color = color;
        interval = items[count].getAttribute("data-speed");

        setTimeout(changeCase, interval);
    }

    setTimeout(changeCase, interval);
})
