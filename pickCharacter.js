let selectedHair = null;
let selectedFace = null;
let selectedBody = null;

function getHair(event) {
    selectedHair = event.target.src;
    console.log("Selected Hair: " + selectedHair);
}

function getFace(event) {
    selectedFace = event.target.src;
    console.log("Selected Face: " + selectedFace);
}

function getBody(event) {
    selectedBody = event.target.src;
    console.log("Selected Body: " + selectedBody);
}

function gamePage() {
    const currentUser = localStorage.getItem("currentUser");

    if (selectedHair && selectedFace && selectedBody) {
        const userData = JSON.parse(localStorage.getItem(currentUser)) || {};
        userData.characterCombo = {
            hair: selectedHair,
            face: selectedFace,
            body: selectedBody
        };

        // Update user data with character selection
        localStorage.setItem(currentUser, JSON.stringify(userData));
        window.location.href = "gamePage.html";
    } else {
        alert("Please select hair, face, and body before proceeding.");
    }
}
