import express from "express";

const router = express.Router();

router.get("/", (req, res) => {  
    const { source, destination, date } = req.query;

    if (!source || !destination || !date) {
        return res.status(400).json({ success: false, message: "Missing parameters" });
    }

    const flights = {
        "IndiGo": "₹1,614",
        "AirAsia": "₹1,869",
        "Vistara": "₹2,133"
    };

    res.json(flights);
});

export default router;
