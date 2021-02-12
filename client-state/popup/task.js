"use strict";

const subscribeModal = document.getElementById("subscribe-modal");
const close = subscribeModal.querySelector(".modal__close");

const getCookie = (name) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts
            .pop()
            .split(";")
            .shift();
    }
}

window.addEventListener("load", () => {
    if (!getCookie("modalClosed")) subscribeModal.classList.add('modal_active');
});

close.addEventListener("click", (event) => {
    event.preventDefault();
    
    let date = new Date;
    date.setDate(date.getDate() + 1);
    date = date.toUTCString();

    document.cookie = "modalClosed=true; Expires=" + date;
    subscribeModal.classList.remove("modal_active");
});
