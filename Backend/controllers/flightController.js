import flights from "../data/flights.js";

export const getFlightPrices = (req, res) => {
    const { source, destination } = req.query;
    const route = `${source}-${destination}`;

    if (!source || !destination) {
        return res.status(400).json({ success: false, message: "Source and destination are required" });
    }

    if (!flights[route]) {
        return res.status(404).json({ success: false, message: "No flights found for this route" });
    }

    return res.status(200).json({ success: true, data: flights[route] });
};
