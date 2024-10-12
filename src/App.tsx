
import Countries from "./Components/Countries";
import Holidays from "./Components/Holidays";
import Sidebar from "./Components/Sidebar";

// Main application component
export default function App() {
  return (
    <div className="d-flex flex-column vh-100">
      {/* Sidebar component for navigation */}
      <Sidebar />
      <Countries title="List of Countries" />  {/* Passing the title prop */}
      <Holidays />
    </div>
  );
}
