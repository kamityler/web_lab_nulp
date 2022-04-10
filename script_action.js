"use strict";
window.addEventListener("DOMContentLoaded", () => {

    const list = document.querySelector("#user-info");
    new URLSearchParams(window.location.search).forEach((value, name) => {
        list.append(`${name}:${value}`);
        list.append(document.createElement(`br`));
    });
});