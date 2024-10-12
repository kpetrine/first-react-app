import Countries from "./Components/Countries";
import Holidays from "./Components/Holidays";
import Sidebar from "./Components/Sidebar";
import Title from "./Components/Title";
import './App.css';

// Main application component
export default function App() {
  return (
    <div className="d-flex flex-column vh-100">
      {/* Sidebar component for navigation */}
      <Title />
      <div className="container mt-5">
        <div className="container-fluid">
          <div className="d-flex">
          <Sidebar />
            <div className="col-10 mt-5">
              <table className="table table-striped table-dark">
                <thead>
                  <tr>
                    <th>Country</th>
                    <th>Holiday</th>
                    <th>Sales Quarter</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className="countries-list" id="tbody"></tbody>
              </table>
            </div>
            
          </div>
        </div>
      </div>
      <Countries title="List of Countries" /> {/* Passing the title prop */}
      <Holidays />
    </div>
  );
}
