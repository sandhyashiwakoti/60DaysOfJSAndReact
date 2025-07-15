import { useState, useEffect } from "react";

// We can now change the ID in the URL dynamically
const API_BASE_URL = "https://jsonplaceholder.typicode.com/users/";

function App() {
  // State to hold which user ID we want to fetch
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Start with false, as we fetch on demand
  const [error, setError] = useState(null);

  useEffect(() => {
    // We don't want to fetch if there's no ID
    if (!userId) return;

    const fetchUserData = async () => {
      setIsLoading(true);
      setError(null); // Clear previous errors
      try {
        const response = await fetch(`${API_BASE_URL}${userId}`);
        if (!response.ok) {
          throw new Error(`User with ID ${userId} not found.`);
        }
        const data = await response.json();
        setUser(data);
      } catch (e) {
        setUser(null); // Clear old user data on error
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [userId]); // The effect now depends on `userId`

  const handleFetchNextUser = () => {
    // Generate a random user ID between 1 and 10
    const nextUserId = Math.floor(Math.random() * 10) + 1;
    setUserId(nextUserId);
  };

  return (
    <div className="container">
      <h1>Random User Fetcher</h1>
      <button onClick={handleFetchNextUser} disabled={isLoading}>
        {isLoading ? "Loading..." : "Get New Random User"}
      </button>

      {/* Show an error message if one exists */}
      {error && <p className="error-text">{error}</p>}

      {/* Show the user card if data is available */}
      {user && !isLoading && !error && (
        <div className="user-card">
          <h2>
            {user.name} (@{user.username})
          </h2>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
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
