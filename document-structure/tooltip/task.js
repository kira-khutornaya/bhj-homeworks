"use strict";

let tooltipElement,
    activeTooltip;

document.addEventListener("click", event => {
    let target = event.target;
    let tooltip = target.getAttribute("title");
    if (!tooltip) return;

    if (activeTooltip && activeTooltip.innerText === tooltip) {
        activeTooltip.remove();
        activeTooltip = null;
        event.preventDefault();
        return;
    } else if (activeTooltip) {
        activeTooltip.remove();
    }

    tooltipElement = document.createElement("div");
    tooltipElement.classList.add("tooltip");
    tooltipElement.classList.add("tooltip_active");
    tooltipElement.innerText = tooltip;
    document.body.append(tooltipElement);
    let coords = target.getBoundingClientRect();

    let left = coords.left + (target.offsetWidth - tooltipElement.offsetWidth) / 2;
    if (left < 0) left = 0;

    let top = coords.top - tooltipElement.offsetHeight - 3;
    if (top < 0) top = coords.top + target.offsetHeight + 3;

    tooltipElement.style.left = left + "px";
    tooltipElement.style.top = top + "px";

    activeTooltip = document.querySelector(".tooltip");

    event.preventDefault();
});
