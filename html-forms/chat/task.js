"use strict";

const chatWidget = document.querySelector(".chat-widget"),
      messages = document.querySelector(".chat-widget__messages"),
      userMessage = document.getElementById("chat-widget__input");
let count = 0,
    botAsks;

chatWidget.addEventListener("click", () => chatWidget.classList.add("chat-widget_active"));

userMessage.addEventListener("keydown", e => {
    if (e.key === "Enter" && userMessage.value) { 
        clearInterval(botAsks);

        messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${new Date().toTimeString().substring(0, 5)}</div>
                <div class="message__text">${userMessage.value}</div>
            </div>
        `;

        userMessage.value = "";

        messages.innerHTML += `
            <div class="message">
                <div class="message__time">${new Date().toTimeString().substring(0, 5)}</div>
                <div class="message__text">${botAnswer()}</div>
            </div>
        `;

        document.querySelector('.chat-widget__messages-container').scrollTop = messages.scrollHeight;
    }
})

botAsks = setInterval(() => {
    if (chatWidget.classList.contains("chat-widget_active")) count++;

    if (count === 30) {
        messages.innerHTML += `
            <div class="message">
                <div class="message__time">${new Date().toTimeString().substring(0, 5)}</div>
                <div class="message__text">${botQuestion()}</div>
            </div>
        `;

        count = 0;
        clearInterval(botAsks);
    }
}, 1000)

function botQuestion() {
    const questions = [
        "Кто здесь?",
        "Где ваша совесть?",
        "Кого ждём?",
        "Сколько можно писать?!",
        "По какому праву вы здесь хозяйничаете?"
    ],
    index = Math.floor(Math.random() * questions.length);

    return questions[index];
}

function botAnswer() {
    const answers = [
        "К сожалению, все операторы сейчас заняты. Не пишите нам больше!",
        "Вы не купили ни одного товара для того, чтобы так с нами разговаривать!",
        "Я здесь главный!",
        "Вы не даете мне пить чай!",
        "Тоска зелёная...",
        "Добрый день! До свидания!",
        "Мы не желаем с вами разговаривать!",
        "Мы ничего не будем вам продавать!",
        "Добрый день, мы ещё не проснулись. Позвоните через 10 лет",
        "Мы не готовы отвечать на ваши вопросы"
    ],
    index = Math.floor(Math.random() * answers.length);

    return answers[index];
}