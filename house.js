// Load saved character combination from local storage
const currentUser = localStorage.getItem("currentUser");
let userData = JSON.parse(localStorage.getItem(currentUser)) || {};

// Initialize user data if it doesn't exist
if (!userData.purchasedItems) {
    userData.purchasedItems = { table: false, cupHead: false, coffeeCup: false };
    localStorage.setItem(currentUser, JSON.stringify(userData));
}

// Load character visuals if they exist
if (userData.characterCombo) {
    document.getElementById("selectedHair").src = userData.characterCombo.hair;
    document.getElementById("selectedFace").src = userData.characterCombo.face;
    document.getElementById("selectedBody").src = userData.characterCombo.body;
} else {
    document.getElementById("selectedCharacter").innerText = "No character selected.";
}

// Change Home button image if a background is selected
const selectedBackground = localStorage.getItem("selectedBackground");
if (selectedBackground) {
    document.getElementById("Home").querySelector("img").src = selectedBackground;
}

// Set visibility based on purchase status for each item
function updateItemVisibility() {
    document.getElementById("item1").style.visibility = userData.purchasedItems.table ? "visible" : "hidden";
    document.getElementById("item2").style.visibility = userData.purchasedItems.cupHead ? "visible" : "hidden";
    document.getElementById("item3").style.visibility = userData.purchasedItems.coffeeCup ? "visible" : "hidden";
}

// Call on load to set correct visibility based on purchase status
updateItemVisibility();

function buyTable() {
    if (userData && userData.points > 1) {
        if (!userData.purchasedItems.table) {
            userData.purchasedItems.table = true;
            localStorage.setItem(currentUser, JSON.stringify(userData)); // Save updated data to localStorage
            document.getElementById("item1").style.visibility = "visible"; // Make the table item visible
        } else {
            alert("Table already bought");
        }
        userData.points -= 1;
    }else {
        alert("Not enough points");
    }
}

function buyCupHead() {
    if (userData && userData.points > 100) {
        if (!userData.purchasedItems.cupHead) {
            userData.purchasedItems.cupHead = true;
            localStorage.setItem(currentUser, JSON.stringify(userData)); // Save updated data to localStorage
            document.getElementById("item2").style.visibility = "visible"; // Make the cup head item visible
        } else {
            alert("Cup Head already bought");
        }
        userData.points -= 100;
    } else {
        alert("Not enough points");
    }
}

function buyCofeCup() {
    if (userData && userData.points > 2) {
        if (!userData.purchasedItems.coffeeCup) {
            userData.purchasedItems.coffeeCup = true;
            localStorage.setItem(currentUser, JSON.stringify(userData)); // Save updated data to localStorage
            document.getElementById("item3").style.visibility = "visible"; // Make the coffee cup item visible
        } else {
            alert("Coffee Cup already bought");
        }
        userData.points -= 15;
    } else {
        alert("Not enough points");
    }
}

// Navigation functions
function Home() {
    window.location.href = "newHome.html";
}

function exit() {
    window.location.href = "gamePage.html";
}
