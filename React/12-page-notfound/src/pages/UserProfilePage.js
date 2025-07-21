import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function UserProfilePage() {
  const { userId } = useParams(); // Get the userId from the URL
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        if (!response.ok) throw new Error("User not found");
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Failed to fetch user:", error);
        setUser(null); // Clear any old user data
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, [userId]); // Re-fetch if the userId in the URL changes

  if (isLoading) {
    return <p>Loading profile...</p>;
  }

  if (!user) {
    return <p>User not found. Please check the ID.</p>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <div className="user-card">
        <h3>{user.name}</h3>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
      </div>
      <Link to="/users" className="back-link">
        ← Back to Users List
      </Link>
    </div>
  );
}
export default UserProfilePage;
