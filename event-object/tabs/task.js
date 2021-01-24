"use strict";

const tabs1 = [...document.getElementById("tabs1").getElementsByClassName("tab")];
const tabContents1 = [...document.getElementById("tabs1").getElementsByClassName("tab__content")];
const tabs2 = [...document.getElementById("tabs2").getElementsByClassName("tab")];
const tabContents2 = [...document.getElementById("tabs2").getElementsByClassName("tab__content")];

function showTab(n, tabsArray, tabContentsArray) {
    tabsArray[n].closest(".tabs").querySelector(".tab_active").classList.remove("tab_active");
    tabsArray[n].closest(".tabs").querySelector(".tab__content_active").classList.remove("tab__content_active");
    tabsArray[n].classList.add("tab_active");
    tabContentsArray[n].classList.add("tab__content_active");
}

tabs1.forEach(el => {
    el.addEventListener("click", () => {
        const index = tabs1.indexOf(el);
        showTab(index, tabs1, tabContents1);
    })
})

tabs2.forEach(el => {
    el.addEventListener("click", () => {
        const index = tabs2.indexOf(el);
        showTab(index, tabs2, tabContents2);
    })
})
