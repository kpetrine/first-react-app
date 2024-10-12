
import Countries from "./Components/Countries";
import Holidays from "./Components/Holidays";
import Sidebar from "./Components/Sidebar";

// Main application component
export default function App() {
  return (
    <div className="d-flex flex-column vh-100">
      {/* Sidebar component for navigation */}
      <Sidebar />
      {/* Countries component to display countries */}
      <Countries />
      {/* Holidays component to display holidays */}
      <Holidays />
    </div>
  );
}
