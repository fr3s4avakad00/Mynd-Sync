
const currentUser = localStorage.getItem("currentUser");
const userData = JSON.parse(localStorage.getItem(currentUser));

function changeImageTo1() {
    if (userData && userData.points > 30) {
        userData.points -= 30;
        userData.selectedBackground = "images/Background1.png";

        // Save updated user data
        localStorage.setItem(currentUser, JSON.stringify(userData));
        window.location.href = "house.html";
    } else {
        alert("Not enough points");
        window.location.href = "house.html";
    }
}

function changeImageTo2() {
    if (userData && userData.points > 30) {
        userData.points -= 30;
        userData.selectedBackground = "images/Background2.png";

        // Save updated user data
        localStorage.setItem(currentUser, JSON.stringify(userData));
        window.location.href = "house.html";
    } else {
        alert("Not enough points");
        window.location.href = "house.html";
    }
}
