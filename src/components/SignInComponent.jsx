import React, { useState } from "react";
import "../style/signin.css";
import { useNavigate } from "react-router-dom";
import { login } from "./api/API.js";

export const SignInComponent = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSignIn = async (e) => {
        e.preventDefault();

        // Validate email format (only student.edu or teacher.edu)
        if (!email.endsWith("@student.edu") && !email.endsWith("@teacher.edu")) {
            setError("Invalid email format! Use '@student.edu' or '@teacher.edu'.");
            return;
        }

        try {
            const response = await login(email, password);

            if (response.error) {
                setError(response.error);
            } else {
                alert("Login successful!");

                // Redirect based on user type
                if (email.endsWith("@student.edu")) {
                    navigate("/student/dashboard");
                } else if (email.endsWith("@teacher.edu")) {
                    navigate("/teacher/dashboard");
                }
            }
        } catch (error) {
            console.error("Login error:", error);
            setError("An error occurred. Please try again.");
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

                    <h3 className="text-center mb-3">Sign In to Hanori</h3>

                    {error && <div className="alert alert-danger">{error}</div>}

                    <form className="signin-form" onSubmit={handleSignIn}>
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

                        <a href="#" className="d-block mb-3 text-danger text-end">
                            Forgot Password?
                        </a>

                        <button type="submit" className="w-100 custom-button">Sign In</button>

                        <p className="text-center mt-3">
                            Don't have an account?{" "}
                            <a href="#" onClick={() => navigate("/signup")}>
                                Sign Up
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};