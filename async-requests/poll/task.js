"use strict";

const pollAnswers = document.getElementById("poll__answers"),
      pollTitle = document.getElementById("poll__title");
  let request = new XMLHttpRequest();
request.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
request.send();

request.addEventListener("readystatechange", function() {
    if (this.readyState == this.DONE && this.status == 200) {
        let receivedData = JSON.parse(this.responseText);
        pollTitle.innerText = receivedData.data.title;

        receivedData.data.answers.forEach(el => pollAnswers.innerHTML += `<button class="poll__answer">${el}</button>`) 

        let answers = [...document.getElementsByClassName("poll__answer")];

        answers.forEach(el => {
            el.addEventListener("click", event => {
                alert("Спасибо, ваш голос засчитан!");

                let xhr = new XMLHttpRequest();
                xhr.open("POST", "https://netology-slow-rest.herokuapp.com/poll.php");
                xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhr.send(`vote=${receivedData.id}&answer=${answers.indexOf(el)}`);

                xhr.addEventListener("readystatechange", function() {
                    if (this.readyState == this.DONE && this.status == 200) {
                        let results = JSON.parse(xhr.responseText),
                            sum = 0;

                        results.stat.forEach(item => sum += item.votes)

                        pollAnswers.innerHTML = `<ul class="votes__percent"></ul>`;

                        let votesPercent = document.querySelector(".votes__percent");

                        results.stat.forEach(item => {
                            votesPercent.innerHTML += ` 
                                <li>${item.answer}: ${(item.votes / sum * 100).toFixed(2)}%</li>
                            `;
                        })
                    }
                })
            })
        })
    }
})
