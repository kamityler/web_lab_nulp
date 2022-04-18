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
        document.querySelector("#pass-vis").addEventListener('click', () => {
            const password = document.querySelector("#user-pass"),
                type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
            /*
            const password = passBox.querySelector("#user-pass").value;
            if (checkBox.checked) {
                passBox.innerHTML = `<input type="text" required placeholder="Пароль" id="user-pass" name="user-pass">`;
                passBox.querySelector("#user-pass").value = password;
            } else {
                passBox.innerHTML = `<input type="password" required 
                placeholder="Пароль" id="user-pass" name="user-pass">`;
                passBox.querySelector("#user-pass").value = password;
            }
            */
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

    //form checkbox 
    {
        const userMode = document.querySelectorAll(".user-mode-checkbox");

        document.querySelector("#button-submit").addEventListener("mouseover", () => {
            console.log(userMode);
            let flag = false;
            userMode.forEach((item, i) => {
                if (item.checked) {
                    flag = true;
                }
            });
            if (!flag) {
                document.querySelector("#checkbox-error").innerHTML = `Оберіть режим гри!!!`;

            } else {
                document.querySelector("#checkbox-error").innerHTML = ``;

            }
        });

        userMode.forEach((item, i) => {
            item.addEventListener('click', () => {
                if (item.checked) {
                    document.querySelector("#checkbox-error").innerHTML = ``;
                }
            });


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

    //submit button
    {
        document.querySelector("#button-submit").addEventListener("click", () => {
            const hiddenInput = document.querySelector("#hidden-input");
            const currentDate = new Date(),
                cDay = currentDate.getDate(),
                cMonth = currentDate.getMonth() + 1,
                cYear = currentDate.getFullYear();
            hiddenInput.value = `${cDay}-${cMonth}-${cYear}`;
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
        timerRadio.forEach((item, i) => {
            if (item.checked) {
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
        setTimeout(() => {
            timerText[2].innerHTML = `00`;
        }, 100);

    });

    function gameTimer() {
        const timer = setInterval(updateTimer, 100);
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

    //chart
    {
        const pawns = document.querySelectorAll("#pawn").length,
            bishops = document.querySelectorAll("#bishop").length,
            knights = document.querySelectorAll("#knight").length,
            rooks = document.querySelectorAll("#rook").length,
            queens = document.querySelectorAll("#queen").length,
            kings = document.querySelectorAll("#king").length;
        let myChart = document.getElementById("my-chart").getContext('2d');
        let chessChart = new Chart(myChart, {
            type: 'bar',
            data: {
                labels: ['Pawns', 'Bishops', 'Knights', 'Rooks', 'Queens', 'Kings'],
                datasets: [{
                    label: 'Amount',
                    data: [pawns, bishops, knights, rooks, queens, kings]
                }]
            },
            options: {}
        });
    }
});