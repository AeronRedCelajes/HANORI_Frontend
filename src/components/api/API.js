const API_LINK = "http://127.0.0.1:8000/api"; // Base API URL for backend

// Function to register a user (student or teacher)
async function register(firstname, lastname, email, student_num, program, password) {
    try {
        let endpoint = `${API_LINK}/register/teacher`; // Default to teacher registration
        let payload = { firstname, lastname, email, password }; // Ensure password is always included

        // If student fields are provided, switch to student registration
        if (student_num && program) {
            endpoint = `${API_LINK}/register/student`;
            payload.student_num = student_num;
            payload.program = program;
        }

        console.log("📤 Sending Request to:", endpoint);
        console.log("📦 Payload:", payload); // Debugging

        const response = await fetch(endpoint, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: { "Content-Type": "application/json" }
        });

        const data = await response.json();
        console.log("📥 Response:", data); // Debugging

        if (!response.ok) {
            return { error: data.message || "Registration failed", details: data.errors || {} };
        }

        return data;
    } catch (error) {
        console.error("❌ Registration Error:", error.message);
        return { error: "Something went wrong during registration." };
    }
}

// Function to log in a user
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
        sessionStorage.clear();
        localStorage.clear();
        return { message: "Logout successful" };
    }

    return { error: "Logout failed. Try again." };
}

// Function to check if user is logged in
function hasAccessToken() {
    return sessionStorage.getItem("access_token") !== null;
}

// Function to get user info (used for determining role)
async function getUserInfo() {
    const token = sessionStorage.getItem("access_token");

    if (!token) return { error: "Unauthorized access" };

    const data = await safeFetch(`${API_LINK}/user`, {
        method: "GET",
        headers: { "Authorization": `Bearer ${token}` }
    });

    if (!data.error) {
        sessionStorage.setItem("user_type", data.user_type);
        
        if (data.user_type === "student") {
            sessionStorage.setItem("student_num", data.user.student_num); // Store student number
        } else {
            sessionStorage.setItem("user_id", data.user.id); // Store teacher ID
        }
    }

    return data;
}

// Function to get the stored user role
function getUserRole() {
    return sessionStorage.getItem("user_type") || null;
}

// Function to fetch the user's profile (Student or Teacher)
async function getProfile() {
    const token = sessionStorage.getItem("access_token");
    const role = getUserRole();

    if (!token || !role) return { error: "Unauthorized access" };

    const userId = role === "student" ? sessionStorage.getItem("student_num") : sessionStorage.getItem("user_id");

    const endpoint = role === "student" ? `profile/students/${userId}` : `profile/teachers/${userId}`;

    return await safeFetch(`${API_LINK}/${endpoint}`, {
        method: "GET",
        headers: { "Authorization": `Bearer ${token}` }
    });
}

// Function to update the user's profile (Student or Teacher)
async function updateProfile(profileData) {
    const token = sessionStorage.getItem("access_token");
    const role = getUserRole();
    const userId = sessionStorage.getItem("user_id");

    if (!token || !role || !userId) return { error: "Unauthorized access" };

    const endpoint = role === "student" ? `profile/students/${userId}` : `profile/teachers/${userId}`;
    const response = await fetch(`${API_LINK}/${endpoint}`, {
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
export { register, login, logout, hasAccessToken, getUserRole, getProfile, updateProfile, getUserInfo };
