import { useParams, Link, Outlet } from "react-router-dom"; // 1. Import Outlet
import { useState, useEffect } from "react";

function UserProfilePage() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const data = await response.json();
      setUser(data);
    };
    fetchUser();
  }, [userId]);

  if (!user) {
    return <p>Loading user profile...</p>;
  }

  return (
    <div>
      {/* 2. This part is the shared UI */}
      <h2>{user.name}'s Profile</h2>
      <nav className="sub-nav">
        <Link to={`/users/${userId}/details`}>Details</Link>
        <Link to={`/users/${userId}/posts`}>Posts</Link>
      </nav>

      {/* 3. The Outlet is where child routes will be rendered */}
      <div className="outlet-content">
        <Outlet />
      </div>

      <Link to="/users" className="back-link">
        ← Back to All Users
      </Link>
    </div>
  );
}
export default UserProfilePage;
