import React, { useState, useEffect } from "react";
import Login from "./Login";
import Register from "./Register";
import { jwtDecode } from "jwt-decode";   // correct import

function App() {
    const [user, setUser] = useState(null);
    const [backendMessage, setBackendMessage] = useState("");
    const [showRegister, setShowRegister] = useState(false);

    // Called after login or auto-login
    const handleLogin = () => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setUser({
                    email: decoded.sub || "",
                    fullName: decoded.fullName || "",     // safe fallback
                    companyId: decoded.companyId || null, // safe fallback
                });
            } catch (err) {
                console.error("Invalid token", err);
            }
        }
    };

    useEffect(() => {
        if (user) {
            const token = localStorage.getItem("token");
            fetch(`${process.env.REACT_APP_API_URL}/api/hello`, {
                headers: { Authorization: `Bearer ${token}` },
            })
                .then((res) => {
                    if (!res.ok) throw new Error(`Backend error: ${res.status}`);
                    return res.text();
                })
                .then((data) => setBackendMessage(data))
                .catch((err) => {
                    console.error(err);
                    setBackendMessage("Failed to fetch backend message");
                });
        }
    }, [user]);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            {!user ? (
                <>
                    {showRegister ? (
                        <Register onAutoLogin={handleLogin} />
                    ) : (
                        <Login onLogin={handleLogin} />
                    )}
                    <button onClick={() => setShowRegister(!showRegister)}>
                        {showRegister ? "Go to Login" : "Go to Register"}
                    </button>
                </>
            ) : (
                <>
                    <h1>Welcome, {user.fullName || user.email}</h1>
                    {user.companyId && <p>Company ID: {user.companyId}</p>}
                    <p>Backend says: {backendMessage}</p>
                </>
            )}
        </div>
    );
}

export default App;
