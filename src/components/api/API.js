const API_LINK = "http://127.0.0.1:8000/api";
let token;

async function register(firstname, lastname, email, password) {
    const response = await fetch(API_LINK + "/register", {
        method: "POST",
        body: JSON.stringify({ firstname, lastname, email, password }),
        headers: { "Content-Type": "application/json" }
    });

    const responseData = await response.json(); // Parse JSON response

    return { status: response.status, ...responseData }; // Return full response including status
}

async function login(email, password) {
    try {
        const response = await fetch(API_LINK + "/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" }
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Login failed");
        }

        const data = await response.json();
        sessionStorage.setItem("access_token", JSON.stringify(data.access_token));
        sessionStorage.setItem("user_email", email); // Store email for role detection

        return data; // Return user data for frontend
    } catch (error) {
        console.error("Login Error:", error.message);
        return { error: error.message }; // Handle error in frontend
    }
}

async function logout() {
    token = JSON.parse(sessionStorage.getItem("access_token"));
    const response = await fetch(API_LINK + "/logout", {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
        }
    });

    if (response.status === 200) {
        sessionStorage.removeItem("access_token");
        sessionStorage.removeItem("user_email"); // Clear stored email on logout
    }

    return response;
}

function hasAccessToken() {
    return sessionStorage.getItem("access_token") !== null;
}

// Function to get user role based on email format
function getUserRole() {
    const email = sessionStorage.getItem("user_email");

    if (email) {
        if (email.endsWith("@student.edu")) {
            return "student";
        } else if (email.endsWith("@teacher.edu")) {
            return "teacher";
        }
    }

    return null; // If no valid email format, return null
}

export { register, login, logout, hasAccessToken, getUserRole };