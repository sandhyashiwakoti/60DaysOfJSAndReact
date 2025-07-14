import { useState, useEffect } from "react";

// A free public API for testing
const API_URL = "https://jsonplaceholder.typicode.com/users/1";

function App() {
  // State to hold our different UI states
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define an async function inside the effect
    const fetchUserData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setUser(data);
      } catch (e) {
        setError(e.message);
      } finally {
        // This will run whether the fetch succeeded or failed
        setIsLoading(false);
      }
    };

    // Call the async function
    fetchUserData();
  }, []); // The empty array means this effect runs only once on mount

  // Conditional Rendering Logic
  if (isLoading) {
    return (
      <div className="container">
        <p>Loading user data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <p className="error-text">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>User Profile</h1>
      {user && (
        <div className="user-card">
          <h2>{user.name}</h2>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Website:</strong> {user.website}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
