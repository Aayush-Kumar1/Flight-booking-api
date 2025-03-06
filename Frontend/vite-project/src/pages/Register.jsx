import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async () => {
        const res = await fetch("http://localhost:8000/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        const data = await res.json();
        if (data.success) {
            alert(data.message);
            navigate("/login"); // Redirect to login page
        } else {
            alert(data.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
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
                    onClick={handleRegister}
                    className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                    Register
                </button>
            </div>
        </div>
    );
};

export default Register;
