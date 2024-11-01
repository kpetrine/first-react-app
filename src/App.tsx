import { useState } from 'react';
import Sidebar from "./Components/Sidebar";
import Title from "./Components/Title";
import './App.css';

// Define the Holiday type
export type Holiday = {
  id: number;
  name: string;
  quarter: string;
  sales?: number | null;
  dates: string[];
  starred: boolean;
};

// Main application component
export default function App() {
  const [holidays, setHolidays] = useState<Holiday[]>([
    {
      id: 1,
      name: 'Mothers Day',
      quarter: 'Q2',
      sales: null,
      dates: ['05/11/2025'],
          starred: false,
  },

{
  id: 2,
  name: 'Mothers Day',
  quarter: 'Q2',
  sales: null,
  dates: ['05/10/2026'],
  starred: false,
},
{
  id: 3,
  name: 'Mothers Day',
  quarter: 'Q2',
  sales: null,
  dates: ['05/09/2027'],
  starred: false,
},
{
  id: 4,
  name: 'Mothers Day',
  quarter: 'Q2',
  sales: null,
  dates: ['05/14/2028'],
  starred: false,
},
{
  id: 5,
  name: 'Mothers Day',
  quarter: 'Q2',
  sales: null,
  dates: ['05/13/2029'],
  starred: false,
},
  
]
  );

  const handleAddHoliday = (newHoliday: Holiday) => {
    setHolidays([...holidays, newHoliday]);
};

const handleDeleteHoliday = (id: number) => {
    setHolidays(holidays.filter(holiday => holiday.id !== id));
};

const toggleStarred = (id: number) => {
    setHolidays(holidays.map(holiday =>
        holiday.id === id ? { ...holiday, starred: !holiday.starred } : holiday
    ));
};


const handleUpdateHoliday = (id: number, updatedHoliday: Partial<Holiday>) => {
    setHolidays(holidays.map(holiday =>
        holiday.id === id ? { ...holiday, ...updatedHoliday } : holiday
    ));
};

return (
    <div className="d-flex flex-column vh-100">
        <Title />
        <div className="container mt-5">
            <div className="container-fluid">
                <div className="d-flex">
                    <Sidebar holidays={holidays} onAddHoliday={handleAddHoliday} />
                    <div className="col-10 mt-5">
                        <table className="table table-striped table-dark">
                            <thead>
                                <tr>
                                    <th>Holiday</th>
                                    <th>Sales Quarter</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className="holidays-list" id="tbody">
                                {holidays.map((holiday) => (
                                    <tr key={holiday.id}>
                                        <td>{holiday.name}</td>
                                        <td>{holiday.quarter}</td>
                                        <td>{holiday.dates.join(", ")}</td>
                                        <td>
                                            <button onClick={() => toggleStarred(holiday.id)}>
                                                {holiday.starred ? 'Unstar' : 'Star'}
                                            </button>
                                            <button onClick={() => handleUpdateHoliday(holiday.id, { dates: ['new date here'] })}>
                                                Update Dates
                                            </button>
                                            <button onClick={() => handleDeleteHoliday(holiday.id)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

