import { useState } from "react";

const FlightSearch = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = () => {
    console.log("Searching for flights:", { source, destination, date });
   
  };

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-xl font-bold mb-4">Search Flights</h2>
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 border rounded"
        />
        <button onClick={handleSearch} className="px-4 py-2 bg-blue-600 text-white rounded">
          Search
        </button>
      </div>
    </div>
  );
};

export default FlightSearch;
