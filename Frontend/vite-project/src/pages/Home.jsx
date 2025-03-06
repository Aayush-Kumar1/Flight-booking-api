import { useState } from "react";

const Home = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!source || !destination || !date) {
      setError("Please fill all fields.");
      return;
    }

    setError(""); 

    try {
      const response = await fetch(
        `http://localhost:8000/api/flights?source=${source}&destination=${destination}&date=${date}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setFlights(Object.entries(data)); 
    } catch (error) {
      console.error("Error fetching flights:", error);
      setError("Failed to fetch flights. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold mb-4">Search for Flights</h2>

      {/* Input Fields */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Source"
          className="p-2 border rounded"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
        <input
          type="text"
          placeholder="Destination"
          className="p-2 border rounded"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <input
          type="date"
          className="p-2 border rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Display Flight Results */}
      <div className="mt-4">
        {flights.length > 0 ? (
          <ul className="bg-white shadow-md p-4 rounded w-72">
            {flights.map(([airline, price], index) => (
              <li key={index} className="p-2 border-b last:border-none">
                ✈️ {airline}: {price}
              </li>
            ))}
          </ul>
        ) : (
          !error && <p>No flights found. Try another search.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
