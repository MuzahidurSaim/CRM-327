import React, { useEffect, useState } from "react";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        const apiUrl = process.env.REACT_APP_API_URL; // read from .env
        fetch(`${apiUrl}/api/hello`)
            .then((response) => response.text())
            .then((data) => setMessage(data))
            .catch((error) => console.error("Error fetching:", error));
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>CRM Frontend</h1>
            <p>Backend says: {message}</p>
        </div>
    );
}

export default App;
