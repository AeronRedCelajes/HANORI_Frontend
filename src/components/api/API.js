const API_LINK = "http://127.0.0.1:8000/api"; // Base API URL for backend

// Function to register a user (student or teacher)
async function register(firstname, lastname, email, password) {
    try {
        const response = await fetch(`${API_LINK}/register`, {
            method: "POST",
            body: JSON.stringify({ firstname, lastname, email, password }),
            headers: { "Content-Type": "application/json" }
        });

        const data = await response.json();

        if (!response.ok) {
            return { error: data.message || "Registration failed", details: data.errors || {} };
        }

        return data;
    } catch (error) {
        console.error("Registration Error:", error.message);
        return { error: "Something went wrong during registration." };
    }
}

// Function to log in a user (student or teacher)
async function login(email, password) {
    try {
        const response = await fetch(`${API_LINK}/login`, {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" }
        });

        const data = await response.json();

        if (!response.ok) {
            return { error: data.message || "Login failed" };
        }

        // Store authentication details in sessionStorage
        sessionStorage.setItem("access_token", data.access_token);
        sessionStorage.setItem("user_email", email); // Store email for role detection

        return data;
    } catch (error) {
        console.error("Login Error:", error.message);
        return { error: "Something went wrong during login." };
    }
}

// Function to log out a user
async function logout() {
    const token = sessionStorage.getItem("access_token");

    if (!token) return { error: "No user is logged in." };

    const response = await fetch(`${API_LINK}/logout`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });

    if (response.ok) {
        sessionStorage.removeItem("access_token");
        sessionStorage.removeItem("user_email");
        localStorage.removeItem("authToken");
        localStorage.removeItem("user_email");
        localStorage.removeItem("role");

        return { message: "Logout successful" };
    }

    return { error: "Logout failed. Try again." };
}

// Function to check if user is logged in
function hasAccessToken() {
    return sessionStorage.getItem("access_token") !== null;
}

// Function to determine user role based on stored email
function getUserRole() {
    const email = sessionStorage.getItem("user_email");

    if (!email) return null;

    if (email.endsWith("@student.edu")) {
        return "student";
    } else if (email.endsWith("@teacher.edu")) {
        return "teacher";
    }

    return null;
}

// Function to fetch the user's profile (Student or Teacher)
async function getProfile(userId) {
    const token = sessionStorage.getItem("access_token");
    const role = getUserRole();

    if (!token || !role) return { error: "Unauthorized access" };

    const endpoint = role === "student" ? "profile/students" : "profile/teachers";
    const response = await fetch(`${API_LINK}/${endpoint}/${userId}`, {
        method: "GET",
        headers: { "Authorization": `Bearer ${token}` }
    });

    const data = await response.json();
    return response.ok ? data : { error: data.message || "Failed to fetch profile" };
}

// Function to update the user's profile (Student or Teacher)
async function updateProfile(userId, profileData) {
    const token = sessionStorage.getItem("access_token");
    const role = getUserRole();

    if (!token || !role) return { error: "Unauthorized access" };

    const endpoint = role === "student" ? "profile/students" : "profile/teachers";
    const response = await fetch(`${API_LINK}/${endpoint}/${userId}`, {
        method: "PUT",
        body: JSON.stringify(profileData),
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });

    const data = await response.json();
    return response.ok ? data : { error: data.message || "Failed to update profile" };
}

// Exporting functions for use in other files
export { register, login, logout, hasAccessToken, getUserRole, getProfile, updateProfile };