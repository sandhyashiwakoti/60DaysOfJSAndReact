// src/pages/NotFoundPage.js
import { Link } from "react-router-dom";
export default function NotFoundPage() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>404</h2>
      <p>Page Not Found</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}
