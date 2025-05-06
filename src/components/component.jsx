import React, { useState } from 'react';
import axios from 'axios';

/**
 * A placeholder React component.
 * Replace this with your custom logic or UI.
 */
const EmptyComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [postData, setPostData] = useState(null);

  const handleClick = () => {
    fetchData();
  };

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:3500/cats/2'); // Update port as needed
      setData(response.data);
    } catch (err) {
      console.log(err)
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async () => {
    setLoading(true);
    setError(null);
    try {
      const payload = {
        "cat": {
            "name": "name5",
            "description": "cat description"
        }
    }
      const response = await axios.post('http://localhost:3500/cats', payload); // Update URL accordingly
      setPostData(response.data);
    } catch (err) {
      console.log(err)
      setError(err?.response?.data?.message || err.message || 'Failed to post data');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div>
      <button onClick={handleClick}>Get request</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {data && (
        <div>
          <h3>Received Data:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}

      <button onClick={handleAdd}>Add</button>
      {postData && (
        <div>
          <h3>Received Data:</h3>
          <pre>{JSON.stringify(postData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default EmptyComponent;