"use strict";

const modal = document.getElementById("modal_main");
const close = [...document.getElementsByClassName("modal__close")];
const success = document.querySelector(".show-success");
const modal_success = document.getElementById("modal_success");

modal.classList.add("modal_active");

close.forEach(el => {
    el.onclick = () => {
        modal.classList.remove("modal_active");
        modal_success.classList.remove("modal_active");
    }
});

success.onclick = () => {
    modal_success.classList.add("modal_active");
    modal.classList.remove("modal_active");
}
