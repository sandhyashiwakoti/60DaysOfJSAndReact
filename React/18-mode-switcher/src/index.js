import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./context/ThemeContext"; // Import our provider
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Wrap the entire app so all components have access to the theme */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
