// Get user information
let userName = prompt("Enter your name:");
let phoneNumber = prompt("Enter your phone number:");
let email = prompt("Enter your email:");
let password = prompt("Enter your password:");
let confirmPassword = prompt("Confirm your password:");

// Check if any prompt is empty
if (!userName || !phoneNumber || !email || !password || !confirmPassword) {
    alert("Error: Please fill in all inputs.");
} else {
    // Check if password and confirmPassword match
    if (password === confirmPassword) {
        alert("Congratulations! You are successfully registered.");
    } else {
        alert("Error: Passwords do not match. Please enter the same password in both fields.");
    }
}

