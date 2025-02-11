import React, { useState } from "react";
import "../style/signup.css";
import { useNavigate } from "react-router-dom";
import { register } from "./api/API.js";

export const SignUpComponent = () => {
    const navigate = useNavigate();
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();
    
        // Validate email domain
        if (!email.endsWith("@student.edu") && !email.endsWith("@teacher.edu")) {
            alert("Invalid email format! Use '@student.edu' or '@teacher.edu'.");
            return;
        }
    
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
    
        try {
            const response = await register(firstname, lastname, email, password);
            console.log("API Response:", response); // Debugging step
    
            // Check if response status is 201 (for created) or contains a success message
            if (response.access_token) { 
                alert("Registration successful!");
                navigate("/signin"); // Redirect to Sign In page
            } else {
                alert(response.message || "Registration unsuccessful. Please try again.");
            }
            
        } catch (error) {
            console.error("Registration error:", error);
            alert("An error occurred. Please try again.");
        }
    };      

    return (
        <div className="container-fluid vh-100 d-flex p-0">
            <div className="col-md-7 d-none d-md-block p-0">
                <img
                    src="/src/assets/univ.png"
                    alt="University"
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                />
            </div>

            <div className="col-md-5 d-flex align-items-center justify-content-center">
                <div className="form-container">
                    <div className="d-flex justify-content-center">
                        <img src="/src/assets/HANR_LOGO-4.png" alt="University" className="w-50 h-50" />
                    </div>

                    <h3 className="text-center mb-3">Sign Up to Hanori</h3>

                    <form className="signup-form" onSubmit={handleSignUp}>
                        <div className="form-group">
                            <label htmlFor="firstname">First Name</label>
                            <input
                                type="text"
                                id="firstname"
                                className="form-control"
                                placeholder="ex. Angelica Mae"
                                required
                                value={firstname}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastname">Last Name</label>
                            <input
                                type="text"
                                id="lastname"
                                className="form-control"
                                placeholder="ex. Manliguez"
                                required
                                value={lastname}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">NEU Email</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="user@student.edu"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                placeholder="*********"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                className="form-control"
                                placeholder="*********"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="w-100 custom-button">Sign Up</button>

                        <p>
                            Have an account already?{" "}
                            <a href="#" onClick={() => navigate("/signin")}>
                                Sign In
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};