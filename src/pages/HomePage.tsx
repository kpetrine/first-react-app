import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Title from './Components/Title';
import Modal from './Components/Modal';
import AddHolidayForm from './Components/AddHolidayForm'; // Import the AddHolidayForm
import ContactForm from './Components/ContactForm.'; // Import Contact Form
import { Holiday } from './App.css';

// Define holiday type
export type Holiday = {
  id: number;
  date: string;
  localName: string;
  name: string;
  countryCode: string;
  starred: boolean;
};

function App() {
  const [holidays, setHolidays] = useState<Holiday[]>([]);

  const handleAddHoliday = (newHoliday: Holiday) => {
    setHolidays([...holidays, newHoliday]);
    closeModal();
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddHoliday = (newHoliday: Holiday) => {
    setHolidays(prevHolidays => [...prevHolidays, newHoliday]);
};

console.log("Holidays state:", holidays);
  return (
    <Router> {/* Wrap your whole app with Router */}
      <div className="d-flex flex-column vh-100">
        <Title />
        <Sidebar holidays={holidays} onAddHoliday={openModal} />
        
        {/* Define your routes here */}
        <Routes>
          <Route 
            path="/" 
            element={ 
              <div className="container mt-5">
                <div className="container-fluid">
                  <div className="d-flex">
                    <div className="col-10 mt-5">
                      <table className="table table-striped table-dark">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Holiday</th>
                            <th>Local Name</th>
                            <th>Country Code</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody className="holidays-list" id="tbody">
                          {holidays.map((holiday) => (
                            <tr key={holiday.id}>
                              <td>{holiday.date}</td>
                              <td>{holiday.name}</td>
                              <td>{holiday.localName}</td>
                              <td>{holiday.countryCode}</td>
                              <td>
                                <button onClick={() => toggleStarred(holiday.id)}>
                                  {holiday.starred ? 'Unstar' : 'Star'}
                                </button>
                                <button onClick={() => handleUpdateHoliday(holiday.id, { date: 'new date here' })}>
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
            } 
          />
          
          {/* Add Holiday Form Page */}
          <Route 
            path="/add-holiday" 
            element={<AddHolidayForm onSubmit={handleAddHoliday} />} 
          />
        </Routes>

        <Modal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleAddHoliday} />
      </div>
    </Router>
  );
}

export default App;
