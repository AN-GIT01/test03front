import React, { useState, useContext } from "react";
import "./styles.css";
import axios from "axios";
import UserContext from "./UserContext";

const LogoutComponent = () => {
  // State variables to hold the input values
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [logoutData, setLogoutData] = useState(null);
  const { user, setUser } = useContext(UserContext);


  const handleLogout = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try{
      const response = await axios.get(`http://localhost:3500/logout`, {
          withCredentials: true,
        });
      setLogoutData(response.data);
      setUser(null)
    } catch (err) {
      setError(
        err?.response?.data?.message || err.message || "Failed to remove data"
      );
      setLogoutData(null);
    } finally {
      setLoading(false);
    }
  };

  if(user) {
    console.log(`User: ${user}`)
  } else {
  console.log(`User not loggedin`)
  }
  

  // JSX to render the form
  return (
    
    <div className="form-container">
      {" "}
      {/* Optional wrapper div for styling */}
      <h2>Logout User</h2>
      {loading && <p>Loading...</p>}
      {/* Submit Button */}
      <button onClick={handleLogout}>Logout User</button>
      {/* Display result */}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {logoutData && (
        <div>
          <h3>Received Data:</h3>
          <pre>{JSON.stringify(logoutData, null, 2)}</pre>
        </div>
      )}
      
      
      {user && <p>User logged: {user.name}</p>}
    </div>
  );
};

export default LogoutComponent;
