import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import routing components
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import "./App.css";

// Import your pages
import HomePage from './pages/HomePage';

// Rendering the root component
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Define routes here */}
        <Route path="/" element={<HomePage />} /> {/* Home page route */}
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

