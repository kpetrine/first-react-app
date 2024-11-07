import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/About";
import ContactForm from "./Components/ContactForm";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./Components/Layout";

function App() {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}
export default App;
