import React, { useState, useContext } from "react";
import "./styles.css";
import axios from "axios";
import UserContext from "./UserContext";

const LoginComponent = () => {
  // State variables to hold the input values
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loginData, setLoginData] = useState(null);
  const { user, setUser } = useContext(UserContext);

  // Handler for when the Name input changes
  const handleNameChange = (event) => {
    setName(event.target.value); // Update the name state with the input's current value
  };

  // Handler for when the Password input changes
  const handlePasswordChange = (event) => {
    setPassword(event.target.value); // Update the password state with the input's current value
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const payload = {
        user: {
          name: name,
          pwd: password,
        },
      };

      const response = await axios.post(
        `http://localhost:3500/login`,
        //  JSON.stringify(payload),
         payload,
        {
          // headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setLoginData(response.data);
      setUser({ name, "jwt": response.data});
    } catch (err) {
      setError(
        err?.response?.data?.message || err.message || "Failed to login data"
      );
      setLoginData(null);
    } finally {
      setLoading(false);
    }
  };

  // const handleTest = async () => {
  //   setLoading(true);
  //   setError(null);
  //   try {
  //     const response = await axios.get(`http://localhost:3500/test`, {
  //       withCredentials: true,
  //     }); // Update URL accordingly
  //     setLoginData(response.data);
  //   } catch (err) {
  //     setError(
  //       err?.response?.data?.message || err.message || "Failed test URL"
  //     );
  //     setLoginData(null);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // JSX to render the form
  return (
    <div className="form-container">
      {" "}
      {/* Optional wrapper div for styling */}
      <h2>Login information</h2>
      {loading && <p>Loading...</p>}
      <form onSubmit={handleSubmit}>
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

        {/* Password Field */}
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password" // Use type="password" for browser validation
            id="password"
            value={password} // The input's value is controlled by the state
            onChange={handlePasswordChange} // Call the handler function when the input changes
            required // Make the field required
          />
        </div>

        {/* Submit Button */}
        <button type="submit">Login User</button>
      </form>
      {/* Display result */}
      {/* <button onClick={handleTest}>Test</button> */}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {user?.jwt && (
        <div>
          <h3>Received Data:</h3>
          <p style={{ display: "inline-block", width: "150px" }}>
            {JSON.stringify(loginData, null, 2)}
          </p>
        </div>
      )}
    </div>
  );
};

export default LoginComponent;
