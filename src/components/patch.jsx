import React, { useState } from "react";
import "./styles.css";
import axios from "axios";

const PatchComponent = () => {
  // State variables to hold the input values
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [patchData, setPatchData] = useState(null);

  // Handler for when the Name input changes
  const handleIdChange = (event) => {
    setId(event.target.value); // Update the name state with the input's current value
  };

  // Handler for when the Name input changes
  const handleNameChange = (event) => {
    setName(event.target.value); // Update the name state with the input's current value
  };

  // Handler for when the Description input changes
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value); // Update the description state with the input's current value
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const payload = {
        cat: {
          id: id,
          name: name,
          description: description,
        },
      };

      const response = await axios.patch(`http://localhost:3500/cats`, payload); // Update URL accordingly
      setPatchData(response.data);
    } catch (err) {
      setError(
        err?.response?.data?.message || err.message || "Failed to patch data"
      );
      setPatchData(null);
    } finally {
      setLoading(false);
    }
  };

  // JSX to render the form
  return (
    <div className="form-container">
      {" "}
      {/* Optional wrapper div for styling */}
      <h2>Change Cat</h2>
      {loading && <p>Loading...</p>}
      <form onSubmit={handleSubmit}>
        {/* id Field */}
        <div>
          <label htmlFor="id">id:</label>
          <input
            type="number"
            id="id"
            value={id} // The input's value is controlled by the state
            onChange={handleIdChange} // Call the handler function when the input changes
            required // Make the field required for basic HTML validation
          />
        </div>

        {/* Name Field */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name} // The input's value is controlled by the state
            onChange={handleNameChange} // Call the handler function when the input changes
            required // Make the field required for basic HTML validation
          />
        </div>

        {/* Description Field */}
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text" // Use type="description" for browser validation
            id="description"
            value={description} // The input's value is controlled by the state
            onChange={handleDescriptionChange} // Call the handler function when the input changes
            required // Make the field required
          />
        </div>

        {/* Submit Button */}
        <button type="submit">Change (Patch)</button>
      </form>
      {/* Display result */}

      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {patchData && (
        <div>
          <h3>Received Data:</h3>
          <pre>{JSON.stringify(patchData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default PatchComponent;
