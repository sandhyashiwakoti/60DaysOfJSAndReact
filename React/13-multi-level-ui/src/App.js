import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import UsersListPage from "./pages/UsersListPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProfileDetails from "./pages/ProfileDetails"; // Import sub-pages
import UserPosts from "./pages/UserPosts"; // Import sub-pages
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="container">
      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <main className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/users" element={<UsersListPage />} />

          {/* 4. This is our nested route structure */}
          <Route path="/users/:userId" element={<UserProfilePage />}>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="posts" element={<UserPosts />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
