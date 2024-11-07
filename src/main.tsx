import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import routing components
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import "./App.css";

import App from './App'
//import AboutPage from './pages/AboutPage'; 
//import ContactPage from './pages/ContactPage'; 

// Rendering the root component
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </StrictMode>
);

