import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin: ["http://localhost:5173", "https://boisterous-pixie-17b3c1.netlify.app/"],
    credentials: true,
};
app.use(cors(corsOptions));

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
