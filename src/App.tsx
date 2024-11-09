import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/About";
import Contact from './pages/Contact'
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./Components/Layout";

function App() {
  return (
    <div>
      <Layout />
      <Routes> {/* Define the routes for navigation */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}
export default App; // Export App component for use in the root file
