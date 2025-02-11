const API_LINK = "http://127.0.0.1:8000/api"; // Base API URL for backend
let token; // Global token variable (not needed due to sessionStorage usage)

// Function to register a user (student or teacher)
async function register(firstname, lastname, email, password) {
    const response = await fetch(API_LINK + "/register", {
        method: "POST",
        body: JSON.stringify({ firstname, lastname, email, password }),
        headers: { "Content-Type": "application/json" }
    });

    const responseData = await response.json(); // Parse JSON response

    return { status: response.status, ...responseData }; // Return response with HTTP status
}

// Function to log in a user (student or teacher)
async function login(email, password) {
    try {
        const response = await fetch(API_LINK + "/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" }
        });

        if (!response.ok) { // Handle error if response is not OK
            const errorData = await response.json();
            throw new Error(errorData.message || "Login failed");
        }

        const data = await response.json();

        // Store authentication details in sessionStorage
        sessionStorage.setItem("access_token", JSON.stringify(data.access_token));
        sessionStorage.setItem("user_email", email); // Store email for role detection

        return data; // Return response data
    } catch (error) {
        console.error("Login Error:", error.message);
        return { error: error.message }; // Return error message
    }
}

// Function to log out a user
async function logout() {
    token = JSON.parse(sessionStorage.getItem("access_token")); // Retrieve token

    const response = await fetch(API_LINK + "/logout", {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + token, // Send token for authentication
            "Content-Type": "application/json"
        }
    });

    if (response.status === 200) {
        // Remove authentication details from sessionStorage on successful logout
        sessionStorage.removeItem("access_token");
        sessionStorage.removeItem("user_email");
    }

    return response;
}

// Function to check if user is logged in
function hasAccessToken() {
    return sessionStorage.getItem("access_token") !== null; // Returns true if token exists
}

// Function to determine user role based on stored email
function getUserRole() {
    const email = sessionStorage.getItem("user_email");

    if (email) {
        if (email.endsWith("@student.edu")) {
            return "student"; // Return "student" role
        } else if (email.endsWith("@teacher.edu")) {
            return "teacher"; // Return "teacher" role
        }
    }

    return null; // If no valid email, return null
}

// Exporting functions for use in other files
export { register, login, logout, hasAccessToken, getUserRole };