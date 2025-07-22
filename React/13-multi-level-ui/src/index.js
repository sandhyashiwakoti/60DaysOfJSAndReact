import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 2. The <BrowserRouter> component MUST wrap your <App /> component */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
