import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import UsersListPage from "./pages/UsersListPage";
import UserProfilePage from "./pages/UserProfilePage";
import NotFoundPage from "./pages/NotFoundPage"; // Import the 404 page

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
          </li>{" "}
          {/* Add contact link */}
        </ul>
      </nav>

      <main className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />{" "}
          {/* Add contact route */}
          <Route path="/users" element={<UsersListPage />} />
          <Route path="/users/:userId" element={<UserProfilePage />} />
          {/* This is the catch-all route. It must be last! */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
