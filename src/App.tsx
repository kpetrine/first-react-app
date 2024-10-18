import { useState } from 'react';
import Countries from "./Components/Countries";
import Holidays from "./Components/Holidays";
import Sidebar from "./Components/Sidebar";
import Title from "./Components/Title";
import './App.css';

// Define the Holiday type
export type Holiday = {
  id: number;
  name: string;
  countries: string[];
  quarter: string;
  dates: string[];
};

// Main application component
export default function App() {
  const [holidays, setHolidays] = useState<Holiday[]>([
    {
      id: 1,
      name: 'Mothers Day',
      countries: ['USA', 'CAN'],
      quarter: 'Q2',
      dates: [
          '05/11/2025',
          '05/10/2026',
          '05/09/2027',
          '05/14/2028',
          '05/13/2029',
      ],
  },
  {
      id: 2,
      name: 'Mothering Sunday',
      countries: ['GBR', 'AUS'],
      quarter: 'Q1',
      dates: [
          '03/30/2025',
          '03/15/2026',
          '03/07/2027',
          '03/26/2028',
          '03/11/2029',
      ],
  },
  {
      id: 3,
      name: 'Black Friday',
      countries: ['USA', 'GBR', 'CAN', 'AUS'],
      quarter: 'Q4',
      dates: [
          '11/29/2024',
          '11/28/2025',
          '11/27/2026',
          '11/26/2027',
          '11/24/2028',
          '11/23/2029',
      ],
  },
  {
      id: 4,
      name: 'Independence Day',
      countries: ['USA'],
      quarter: 'Q3',
      dates: ['07/04/2025'],
  },
  {
      id: 5,
      name: 'Canada Day',
      countries: ['CAN'],
      quarter: 'Q3',
      dates: ['07/10/2025'],
  },
  {
      id: 6,
      name: 'Australia Day',
      countries: ['AUS'],
      quarter: 'Q1',
      dates: ['01/26/2025'],
  },
]
  );

  const handleAddHoliday = (newHoliday: Holiday) => {
    setHolidays([...holidays, newHoliday]);
  };


  const handleDeleteHoliday = (id: number) => {
    setHolidays(holidays.filter(holiday => holiday.id !== id));
  };

  return (
    <div className="d-flex flex-column vh-100">
      {/* Sidebar component for navigation */}
      <Title />
      <div className="container mt-5">
        <div className="container-fluid">
          <div className="d-flex">
          <Sidebar holidays={holidays} onAddHoliday={handleAddHoliday} />
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
      <Holidays holidays={holidays} onDelete={handleDeleteHoliday} />
    </div>
  );
}
