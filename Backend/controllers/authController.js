import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const users = []; 
const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// Register a new user
export const registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ success: false, message: "Username and password are required" });
        }

        // Check if user already exists
        const existingUser = users.find((user) => user.username === username);
        if (existingUser) {
            return res.status(400).json({ success: false, message: "Username already taken" });
        }

        // Hash password and save user
        const hashedPassword = await bcrypt.hash(password, 10);
        users.push({ username, password: hashedPassword });

        res.status(201).json({ success: true, message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// Login a user
export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = users.find((u) => u.username === username);
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }

        // Generate JWT Token
        const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });
        res.cookie("token", token, { httpOnly: true });

        res.status(200).json({ success: true, message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// Get user profile (Protected Route)
export const getProfile = (req, res) => {
    res.json({ success: true, user: req.user });
};
