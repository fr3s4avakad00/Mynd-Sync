var points = 0;
var ele;

window.addEventListener("load", function () {
    ele = document.getElementById("points");
    retrievePoints();
});

function timer() {
    window.location.href = "timer.html";
}

function home() {
    window.location.href = "house.html";
}

function logOut() {
    window.location.href = "focusGameMenu.html";
}


function retrievePoints() {
    const currentUser = localStorage.getItem("currentUser");
    const userData = JSON.parse(localStorage.getItem(currentUser));

    if (userData && userData.points) {
        points = userData.points;
        ele.innerHTML = `Points: ${points}`;
    } else {
        ele.innerHTML = "Points: 0";
    }
}

function resetUserData() {
    const currentUser = localStorage.getItem("currentUser");

    if (currentUser) {
        // Retrieve the current user data
        let userData = JSON.parse(localStorage.getItem(currentUser));

        if (userData) {
            // Reset data fields, but retain character info
            userData = {
                ...userData,  // Keep existing data structure
                points: 0,
                purchasedItems: { table: false, cupHead: false, coffeeCup: false },
                selectedBackground: null
            };

            // Save the updated user data back to localStorage
            localStorage.setItem(currentUser, JSON.stringify(userData));

            // Reload or refresh to apply reset, but keep character visible
            alert("User data has been reset, but the character remains.");
            window.location.reload();
        } else {
            alert("User data not found.");
        }
    } else {
        alert("No user is currently logged in.");
    }
}


function resetLoggedInUser() {
    const currentUser = localStorage.getItem("currentUser");

    if (currentUser) {
        // Remove the user's data from localStorage
        localStorage.removeItem(currentUser);

        // Remove the session key for current user
        localStorage.removeItem("currentUser");

        // Optional: Redirect to login or refresh to show reset state
        alert("User data has been reset and the user has been logged out.");
        window.location.href = "loadGame.html"; // Redirect to login page
    } else {
        alert("No user is currently logged in.");
    }
}

