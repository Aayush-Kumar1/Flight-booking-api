import express from "express";
import { registerUser, loginUser, getProfile } from "../controllers/authController.js";
import { verifyToken } from "../middlewares/authmiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", verifyToken, getProfile);

export default router;
