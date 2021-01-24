"use strict";

const dropdownValue = [...document.getElementsByClassName("dropdown__value")];
const dropdownLink = [...document.getElementsByClassName("dropdown__link")];

dropdownValue.forEach(el => {
    el.addEventListener("click", () => {
        el.closest(".dropdown").querySelector(".dropdown__list").classList.toggle("dropdown__list_active");
    })
})

dropdownLink.forEach(el => {
    el.addEventListener("click", (event) => {
        el.closest(".dropdown").querySelector(".dropdown__list").classList.remove("dropdown__list_active");
        el.closest(".dropdown").querySelector(".dropdown__value").textContent = el.textContent;
        event.preventDefault();
    })
})
