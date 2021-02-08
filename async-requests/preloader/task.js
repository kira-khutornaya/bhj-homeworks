"use strict";

let items = document.getElementById("items"),
    request = new XMLHttpRequest();

request.open("GET", "https://netology-slow-rest.herokuapp.com");
request.send();

request.addEventListener("readystatechange", function() {
    if (this.readyState == this.DONE && this.status == 200) {
        const data = JSON.parse(this.responseText);

        for (let key in data.response.Valute) {
            items.innerHTML += ` 
                <div class="item">
                    <div class="item__code">${data.response.Valute[key].CharCode}</div>
                    <div class="item__value">${data.response.Valute[key].Value}</div>
                    <div class="item__currency">руб.</div>
                </div>
            `;
        }    

        document.getElementById("loader").classList.remove("loader_active");
    }
})
