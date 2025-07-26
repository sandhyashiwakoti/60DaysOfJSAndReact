import { useParams, NavLink, Outlet, Link } from "react-router-dom";
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
      <h2>{user.name}'s Profile</h2>
      <nav className="sub-nav">
        {/* The `end` prop is important for the parent link */}
        <NavLink end to={`/users/${userId}`}>
          Overview
        </NavLink>
        <NavLink to={`/users/${userId}/posts`}>Posts</NavLink>
      </nav>

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
