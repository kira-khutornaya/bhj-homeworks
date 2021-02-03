"use strict";

const productsBasket = document.querySelector(".cart__products");
let goods;

function toLocalStorage() {
    goods = productsBasket.innerHTML;
    localStorage.setItem("goods", goods);
}

document.addEventListener("click", event => {
    if (event.target.classList.contains("product__quantity-control_dec")) reduceAmount(event.target);
    else if (event.target.classList.contains("product__quantity-control_inc")) increaseAmount(event.target);
    else if (event.target.classList.contains("product__add")) addToCart(event.target);
    else if (event.target.classList.contains("cart__product-remove")) event.target.closest(".cart__product").remove();
    toLocalStorage();
})

function reduceAmount(el) {
    let quantityValue = el.closest(".product__quantity-controls").querySelector(".product__quantity-value");
    if (quantityValue.textContent != 1) quantityValue.textContent--;
}

function increaseAmount(el) {
    el.closest(".product__quantity-controls").querySelector(".product__quantity-value").textContent++;
}

function addToCart(el) {
    let id = el.closest(".product").dataset.id,
        img = el.closest(".product").querySelector(".product__image").getAttribute("src"),
        count = el.closest(".product__quantity").querySelector(".product__quantity-value").textContent,
        products = [...document.getElementsByClassName("cart__product")],
        hasProduct;

    products.forEach(item => {
        if (item.dataset.id === el.closest(".product").dataset.id) hasProduct = item;
    })

    if (hasProduct) {
        let productCount = hasProduct.querySelector(".cart__product-count");
        productCount.textContent = Number(productCount.textContent) + Number(count);
    } else {
        productsBasket.innerHTML += `
            <div class="cart__product" data-id="${id}">
                <img class="cart__product-image" src="${img}">
                <div class="cart__product-count">${count}</div>
                <div class="cart__product-remove">&times;</div>
            </div>
        `;
    }
}

if (localStorage.getItem("goods", goods)) productsBasket.innerHTML = localStorage.getItem("goods", goods);
