import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import routing components
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./App.css";

import App from "./App"; // Import the main App component

// Rendering the root component
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
