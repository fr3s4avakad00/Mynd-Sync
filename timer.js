var timer;
var sec = 0;
var min = 0;
var hour = 0;
var total = 0;
var points = 0;
var pressed = false;
var ele;

window.onload = function () {
    ele = document.getElementById("timerPage");
};

function startTimer() {

    if (!pressed) {
        pressed = true;

        // Start timer
        timer = setInterval(() => {
            if (sec === 60) {
                sec = 0;
                min++;
            }
            if (min === 60) {
                min = 0;
                hour++;
            }
            
            // Update timer display
            ele.innerHTML = (hour < 10 ? "0" + hour : hour) + ":" + (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
            sec++;
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    pressed = false;
}

function getPoints() {
    const currentUser = localStorage.getItem("currentUser");
    const userData = JSON.parse(localStorage.getItem(currentUser)) || {};

    // Prevent multiple clicks
    if (pressed) {
        pressed = false;
    }

    // Calculate points based on focus duration
    total = (hour * 3600) + (min * 60) + sec;
    points = Math.trunc(total / 15);

    // Update user's points
    userData.points = (userData.points || 0) + points;
    localStorage.setItem(currentUser, JSON.stringify(userData));

    // Reset timer and display
    clearInterval(timer);
    sec = 0;
    min = 0;
    ele.innerHTML = "00:00:00";
    return points;
}

function exit() {
    window.location.href = "gamePage.html";
}