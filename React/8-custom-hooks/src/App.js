import { useState } from "react";
import useFetch from "./useFetch"; // Import our custom hook

function App() {
  // State to control which user ID we are fetching
  const [userId, setUserId] = useState(1);

  // Use our custom hook to get all the data, loading, and error logic
  const {
    data: user,
    isLoading,
    error,
  } = useFetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

  const handleFetchNextUser = () => {
    setUserId((prevId) => (prevId < 10 ? prevId + 1 : 1));
  };

  return (
    <div className="container">
      <h1>Custom Hook: `useFetch`</h1>
      <button onClick={handleFetchNextUser} disabled={isLoading}>
        {isLoading ? "Loading..." : "Fetch Next User"}
      </button>

      {isLoading && <p>Loading user data...</p>}
      {error && <p className="error-text">Error: {error}</p>}
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
