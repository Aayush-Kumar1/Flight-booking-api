import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        const res = await fetch("http://localhost:8000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include", // Important for cookies
            body: JSON.stringify({ username, password }),
        });

        const data = await res.json();
        if (data.success) {
            alert(data.message);
            navigate("/"); // Redirect to Home page
        } else {
            alert(data.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    className="w-full p-2 border rounded mb-4"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 border rounded mb-4"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    onClick={handleLogin}
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;
