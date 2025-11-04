import React, { useState } from "react";

function Register({ onAutoLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setMessage("");

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) throw new Error("Registration failed");

            const text = await response.text();
            setMessage(text);

            // After 3 seconds, auto-login with the same credentials
            setTimeout(async () => {
                try {
                    const loginResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ email, password }),
                    });

                    if (!loginResponse.ok) throw new Error("Auto-login failed");

                    const data = await loginResponse.json();
                    localStorage.setItem("token", data.token);
                    onAutoLogin(email);
                } catch (loginErr) {
                    setError(loginErr.message);
                }
            }, 3000);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "50px auto" }}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Register</button>
            </form>
            {message && <p style={{ color: "green" }}>{message}</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}

export default Register;
