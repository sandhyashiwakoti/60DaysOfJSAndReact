import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UsersListPage from "./pages/UsersListPage";
import UserProfilePage from "./pages/UserProfilePage";

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
        </ul>
      </nav>

      <main className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/users" element={<UsersListPage />} />
          <Route path="/users/:userId" element={<UserProfilePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
