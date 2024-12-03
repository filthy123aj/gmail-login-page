// Wait for the DOM to load before executing the script
document.addEventListener("DOMContentLoaded", function() {
    // Get the form element by its ID
    const loginForm = document.getElementById("login-form");

    // Listen for the form submission
    loginForm.addEventListener("submit", function(event) {
        // Prevent the form from actually submitting and reloading the page
        event.preventDefault();

        // Get the email and password entered by the user
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Simulate a basic email validation (not real validation)
        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

        // Simulate the login process (e.g., successful login)
        if (email === "user@example.com" && password === "password123") {
            alert("Login successful!");
            // You can redirect to another page after login
            // window.location.href = "home.html";  // Redirect to home page (for example)
        } else {
            alert("Invalid email or password. Please try again.");
        }
    });
});