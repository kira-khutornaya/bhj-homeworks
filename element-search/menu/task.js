"use strict";

const links = [...document.getElementsByClassName("menu__link")];

links.forEach(el => {
    el.onclick = () => {
        const activeItem = document.querySelector(".menu_active");
        if (el.closest("li.menu__item").querySelector("ul.menu_sub")) {
            el.closest("li.menu__item").querySelector("ul.menu_sub").classList.toggle("menu_active");
            if (activeItem) {
                activeItem.classList.remove("menu_active");
            }
            return false;
        }
    }
});
