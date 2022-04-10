"use strict";
window.addEventListener("DOMContentLoaded", () => {

    //age range
    const ageRange = document.querySelector("#user-age");
    ageRange.addEventListener('click', () => {
        document.querySelector("#current-age").innerHTML = `${ageRange.value}`;
    });
    ageRange.addEventListener('keyup', () => {
        document.querySelector("#current-age").innerHTML = `${ageRange.value}`;
    });
    ageRange.addEventListener('mousemove', () => {
        document.querySelector("#current-age").innerHTML = `${ageRange.value}`;
    });

    //password visibility
    const passBox = document.querySelector(".user-pass"),
        checkBox = document.querySelector("#pass-vis");
    checkBox.addEventListener('click', () => {
        const password = passBox.querySelector("#user-pass").value;
        if (checkBox.checked) {
            passBox.innerHTML = `<input type="text" required placeholder="Пароль" id="user-pass" name="user-pass">`;
            passBox.querySelector("#user-pass").value = password;
        } else {
            passBox.innerHTML = `<input type="password" required placeholder="Пароль" id="user-pass" name="user-pass">`;
            passBox.querySelector("#user-pass").value = password;
        }
    });

    //password repeat
    const passwordConf = document.querySelectorAll(".user-pass"),
        labelDiv = document.querySelector("#user-pass-label");
    passwordConf[2].addEventListener('keyup', () => {
        if (passwordConf[2].value != "") {
            if (passwordConf[1].value == passwordConf[2].value && passwordConf[1] != null) {
                labelDiv.innerHTML = `
            <label style="float:left; background-color: green;
            color:aliceblue; " for="user-pass" >Повторити: </label>
            `;
            } else {
                labelDiv.innerHTML = `
            <label style="float:left; background-color: red;
            color:aliceblue; " for="user-pass" >Повторити: </label>
            `;
            }
        } else {
            labelDiv.innerHTML = `
            <label style="float:left;" for="user-pass" >Повторити: </label>
            `;
        }
    });

    passwordConf[1].addEventListener('keyup', () => {
        if (passwordConf[2].value != "") {
            if (passwordConf[1].value == passwordConf[2].value) {
                labelDiv.innerHTML = `
            <label style="float:left; background-color: green;
            color:aliceblue; " for="user-pass" >Повторити: </label>
            `;
            } else {
                labelDiv.innerHTML = `
            <label style="float:left; background-color: red;
            color:aliceblue; " for="user-pass" >Повторити: </label>
            `;
            }
        } else {
            labelDiv.innerHTML = `
            <label style="float:left;" for="user-pass" >Повторити: </label>
            `;
        }
    });

    //reset button
    const resetButton = document.querySelector("#button-reset");
    resetButton.addEventListener('click', () => {
        document.querySelector("#current-age").innerHTML = `18`;
        labelDiv.innerHTML = `
    <label style="float:left;" for="user-pass" >Повторити: </label>
    `;
    });

});
