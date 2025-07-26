import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import UsersListPage from "./pages/UsersListPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProfileDetails from "./pages/ProfileDetails";
import UserPosts from "./pages/UserPosts";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="container">
      <nav className="main-nav">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

      <main className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/users" element={<UsersListPage />} />

          <Route path="/users/:userId" element={<UserProfilePage />}>
            <Route index element={<ProfileDetails />} />
            <Route path="posts" element={<UserPosts />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
