"use strict";

const book = document.querySelector(".book");
const fontSize = [...document.getElementsByClassName("font-size")];
const fontColor = [...document.querySelector(".book__control_color").getElementsByClassName("color")];
const bgColor = [...document.querySelector(".book__control_background").getElementsByClassName("color")];

fontSize.forEach(el => {
    el.addEventListener("click", (event) => {
        document.querySelector(".font-size_active").classList.remove("font-size_active");
        el.classList.add("font-size_active");
        if (el.classList.contains("font-size_small")) {
            if (book.classList.contains("book_fs-big")) book.classList.remove("book_fs-big");
            book.classList.add("book_fs-small");	
        } else if (el.classList.contains("font-size_big")) {
            if (book.classList.contains("book_fs-small")) book.classList.remove("book_fs-small");
            book.classList.add("book_fs-big");
        } else {
            if (book.classList.contains("book_fs-small")) book.classList.remove("book_fs-small");
            else if (book.classList.contains("book_fs-big")) book.classList.remove("book_fs-big");
        }

        event.preventDefault();
    })
})

fontColor.forEach(el => {
    el.addEventListener("click", (event) => {
        document.querySelector(".book__control_color").querySelector(".color_active").classList.remove("color_active");
        el.classList.add("color_active");
        if (el.classList.contains("text_color_gray")) {
            if (book.classList.contains("book_color-whitesmoke")) book.classList.remove("book_color-whitesmoke");
            book.classList.add("book_color-gray");	
        } else if (el.classList.contains("text_color_whitesmoke")) {
            if (book.classList.contains("book_color-gray")) book.classList.remove("book_color-gray");
            book.classList.add("book_color-whitesmoke");
        } else {
            if (book.classList.contains("book_color-gray")) book.classList.remove("book_color-gray");
            else if (book.classList.contains("book_color-whitesmoke")) book.classList.remove("book_color-whitesmoke");
        }

        event.preventDefault();
    })
})

bgColor.forEach(el => {
    el.addEventListener("click", (event) => {
        document.querySelector(".book__control_background").querySelector(".color_active").classList.remove("color_active");
        el.classList.add("color_active");
        if (el.classList.contains("bg_color_gray")) {
            if (book.classList.contains("book_bg-black")) book.classList.remove("book_bg-black");
            book.classList.add("book_bg-gray");	
        } else if (el.classList.contains("bg_color_black")) {
            if (book.classList.contains("book_bg-gray")) book.classList.remove("book_bg-gray");
            book.classList.add("book_bg-black");
        } else {
            if (book.classList.contains("book_bg-black")) book.classList.remove("book_bg-black");
            else if (book.classList.contains("book_bg-gray")) book.classList.remove("book_bg-gray");
        }

        event.preventDefault();
    })
})
