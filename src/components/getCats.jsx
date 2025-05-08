import React, { useState } from "react";
import "./styles.css";
import axios from "axios";

const GetCatsComponent = () => {
  // State variables to hold the input values
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [getData, setGetData] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `http://localhost:3500/cats`
      ); 
      setGetData(response.data);
    } catch (err) {
      setError(
        err?.response?.data?.message || err.message || "Failed to get data"
      );
      setGetData(null);
    } finally {
      setLoading(false);
    }
  };

  // JSX to render the form
  return (
    <div className="form-container">
      {" "}
      {/* Optional wrapper div for styling */}
      <h2>Get all Cats</h2>
      {loading && <p>Loading...</p>}

      <button onClick={handleSubmit}>Get all Cat</button>

      {/* Display result */}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {getData && (
        <div>
          <h3>Received Data:</h3>
          <pre>{JSON.stringify(getData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default GetCatsComponent;
