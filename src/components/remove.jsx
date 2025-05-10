import React, { useState } from "react";
import "./styles.css";
import axios from "axios";

const RemoveComponent = () => {
  // State variables to hold the input values
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [removeData, setRemoveData] = useState(null);

  // Handler for when the Name input changes
  const handleIdChange = (event) => {
    setId(event.target.value); // Update the name state with the input's current value
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const payload = {
        cat: {
          id: id
        },
      };

      console.log(payload);

      const response = await axios.delete(
        `http://localhost:3500/cats`,
        { 
          data: payload,
          withCredentials: true,
        },
        
      ); 
      setRemoveData(response.data);
    } catch (err) {
      setError(
        err?.response?.data?.message || err.message || "Failed to remove data"
      );
      setRemoveData(null);
    } finally {
      setLoading(false);
    }
  };

  // JSX to render the form
  return (
    <div className="form-container">
      {" "}
      {/* Optional wrapper div for styling */}
      <h2>Remove Cat</h2>
      {loading && <p>Loading...</p>}
      <form onSubmit={handleSubmit}>
        {/* id Field */}
        <div>
          <label htmlFor="idCatRemove">id:</label>
          <input
            type="number"
            id="CatRemove"
            value={id} // The input's value is controlled by the state
            onChange={handleIdChange} // Call the handler function when the input changes
            required // Make the field required for basic HTML validation
          />
        </div>

        {/* Submit Button */}
        <button type="submit">Remove (Delete)</button>
      </form>
      {/* Display result */}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {removeData && (
        <div>
          <h3>Received Data:</h3>
          <pre>{JSON.stringify(removeData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default RemoveComponent;
