"use strict";

const taskList = document.getElementById("tasks__list"),
      taskInput = document.getElementById("task__input"),
      taskAdding = document.getElementById("tasks__add");
let task;

function toLocalStorage() {
    task = taskList.innerHTML;
    localStorage.setItem("task", task);
}

function addTask(event) {
    if (taskInput.value) {
        taskList.innerHTML += `
            <div class="task">
                <div class="task__title">${taskInput.value}</div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `;  
        
        taskInput.value = "";
        toLocalStorage();
    }

    event.preventDefault();
}

taskInput.addEventListener("keydown", e => {
    if (e.key === "enter") addTask;
})

taskAdding.addEventListener("click", addTask); 

document.addEventListener("click", event => {
    if (event.target.classList.contains("task__remove")) {
        event.target.parentElement.remove();
        toLocalStorage();
    }
})

if (localStorage.getItem("task")) taskList.innerHTML = localStorage.getItem("task");
