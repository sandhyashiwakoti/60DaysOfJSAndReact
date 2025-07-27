import { useState, useEffect } from "react";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Fetch all users once when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // This is a "derived" value. It's calculated on every render.
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>User Search</h1>
        <input
          type="text"
          placeholder="Search by name..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>
      <main className="user-list">
        {isLoading ? (
          <p>Loading users...</p>
        ) : (
          filteredUsers.map((user) => (
            <UserCard key={user.id} name={user.name} email={user.email} />
          ))
        )}
        {!isLoading && filteredUsers.length === 0 && <p>No users found.</p>}
      </main>
    </div>
  );
}

// Inline styles for App layout for simplicity
const styles = `
  .app-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 40px 20px;
  }
  .app-header {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 30px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    text-align: center;
  }
  .app-header h1 {
    margin: 0 0 15px 0;
  }
  .search-input {
    width: 100%;
    max-width: 400px;
    padding: 12px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .user-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
`;

// A simple way to inject styles without a separate CSS module for App
function StyledApp() {
  return (
    <>
      <style>{styles}</style>
      <App />
    </>
  );
}

export default StyledApp;
