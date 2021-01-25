"use strict";

const checkTree = document.querySelector(".interests_main"),
      interestCheck = checkTree.querySelectorAll(".interest");

interestCheck.forEach(el => {
    el.addEventListener("change", event => {
        let checkedInterests,
            childInterests,
            parentInterest;
        const mainInterest = event.target.closest(".interest").querySelector(".interests_active");
            
        if (mainInterest) {
            mainInterest.querySelectorAll(".interest__check").forEach(e => {
                e.checked = event.target.checked;
            })
        }

        if (el.closest(".interests").classList.contains("interests_active")) {
            parentInterest = (el.closest(".interests").parentElement).querySelector(".interest__check");
            childInterests = el.closest(".interests").querySelectorAll(".interest__check");
            checkedInterests = el.closest(".interests").querySelectorAll(".interest__check:checked");
        } else {
            parentInterest = el.querySelector(".interest__check");
            childInterests = el.querySelectorAll(".interest__check");
            checkedInterests = el.querySelectorAll(".interest__check:checked");
        }

        if (checkedInterests.length === 0) {
            parentInterest.indeterminate = false;
            parentInterest.checked = false;
        } else if (checkedInterests.length < childInterests.length) {
            parentInterest.indeterminate = true;
            parentInterest.checked = false;
        } else {
            parentInterest.indeterminate = false;
            parentInterest.checked = true;
        }
    })
})
