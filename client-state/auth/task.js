"use strict";

const signIn = document.getElementById("signin"),
      signInForm = document.getElementById("signin__form"),
      welcome = document.getElementById("welcome"),
      userId = document.getElementById("user_id");
      
signIn.classList.add("signin_active");

if (localStorage.getItem("id")) {
    userId.textContent = localStorage.getItem("id");
    signIn.classList.remove("signin_active");
    welcome.classList.add("welcome_active");
}

signInForm.addEventListener("submit", event => {
    event.preventDefault();
    let formData = new FormData(signInForm), 
        request = new XMLHttpRequest();

    request.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    request.send(formData);

    request.addEventListener("readystatechange", function() {
        if (this.readyState == this.DONE && this.status == 200) {
            let data = JSON.parse(this.responseText);

            if (data.success == false) {
                alert("Неверный логин/пароль");
                signInForm.reset();
            } else {
                localStorage.setItem("id", data.user_id);
                userId.textContent = data.user_id;
                signIn.classList.remove("signin_active");
                welcome.classList.add("welcome_active");
            }

        }
    })
})

document.getElementById("logout__btn").addEventListener("click", event => {
    signInForm.reset();
    localStorage.clear();
    window.location.reload();
})
