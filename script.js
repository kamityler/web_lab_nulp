"use strict";
window.addEventListener("DOMContentLoaded", () => {

    //age range
    {
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
    }

    //password visibility
    {
        const passBox = document.querySelector(".user-pass"),
            checkBox = document.querySelector("#pass-vis");
        checkBox.addEventListener('click', () => {
            const password = passBox.querySelector("#user-pass").value;
            if (checkBox.checked) {
                passBox.innerHTML = `<input type="text" required placeholder="Пароль" id="user-pass" name="user-pass">`;
                passBox.querySelector("#user-pass").value = password;
            } else {
                passBox.innerHTML = `<input type="password" required 
                placeholder="Пароль" id="user-pass" name="user-pass">`;
                passBox.querySelector("#user-pass").value = password;
            }
        });
    }

    //password repeat
    {
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
    }

    //reset button
    {
        const resetButton = document.querySelector("#button-reset"),
            labelDiv = document.querySelector("#user-pass-label");
        resetButton.addEventListener('click', () => {
            document.querySelector("#current-age").innerHTML = `18`;
            labelDiv.innerHTML = `
    <label style="float:left;" for="user-pass" >Повторити: </label>
    `;
        });
    }

    //timer
    const timerStartButton = document.querySelector("#timer-start-button"),
        timerResetButton = document.querySelector("#timer-reset-button"),
        timerRadio = document.querySelectorAll(".timer-radio"),
        timerText = document.querySelectorAll('.timer-block span'),
        timerBox = document.querySelector('.timer-block');

    let leftTime = 10;

    timerStartButton.addEventListener('click', () => {
        timerRadio.forEach((item,i)=>{
            if(item.checked){
                setTime(i);
            }
        });
        if (leftTime > 1) {
            changeClass(timerBox, 'border-red', 'border-green');
            gameTimer(leftTime);
        }
    });

    timerResetButton.addEventListener('click', () => {
        changeClass(timerBox, 'border-green', 'border-red');
        leftTime = 1;
    });

    function gameTimer() {
        const timer = setInterval(updateTimer, 1000);
        if (leftTime <= 0) {
            changeClass(timerBox, 'border-green', 'border-red');
            clearInterval(timer);
        }
        leftTime *= 60;
        function updateTimer() {
            leftTime -= 1;
            timerText[0].innerHTML = parseInt(leftTime / 60);
            let seconds = leftTime - parseInt(leftTime / 60) * 60;
            seconds < 10 ? timerText[2].innerHTML = `0${seconds}` : timerText[2].innerHTML = `${seconds}`;
            console.log(leftTime);
            if (leftTime <= 0) {
                changeClass(timerBox, 'border-green', 'border-red');
                clearInterval(timer);
            }
        }
    }

    function changeClass(element, class1, class2) {
        if (element.classList.contains(class1)) {
            element.classList.remove(class1);
            element.classList.add(class2);
        } else if (!element.classList.contains(class2)) {
            element.classList.add(class2);
        }
    }

    function setTime(i) {
        console.log(leftTime);
        setTimeout(1000);
        switch (i) {
            case 0:
                leftTime = 10;
                break;
            case 1:
                leftTime = 30;
                break;
            case 2:
                leftTime = 60;
                break;
            default:
                leftTime = 10;
                break;
        }
        timerText[0].innerHTML = leftTime;
    }


});
