const API_URL = "https://your-backend-deployed-url.com"; // Change this to your backend URL

fetch(`${API_URL}/api/auth/register`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: "test", password: "123456" }),
});
