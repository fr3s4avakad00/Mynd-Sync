// SignIn user
document.getElementById("signInForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("signName").value;
    const password = document.getElementById("signPassword").value;

    // Create user data structure
    const userData = {
        password: password,
        points: 0,
        characterCombo: null,
        selectedBackground: null
    };

    // Save user data in localStorage
    localStorage.setItem(name, JSON.stringify(userData));
    localStorage.setItem("currentUser", name); // Track the current logged-in user

    window.location.href = "pickCharacter.html";
});

// Login user
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("loginName").value;
    const password = document.getElementById("loginPassword").value;

    // Retrieve stored user data
    const userData = JSON.parse(localStorage.getItem(name));

    if (userData && userData.password === password) {
        // Store current user session
        localStorage.setItem("currentUser", name);
        window.location.href = "gamePage.html";
    } else {
        document.getElementById("message").innerText = "Invalid name or password!";
    }
    document.getElementById("loginForm").reset();
});
