import { useState } from 'react';
import Modal from './Components/Modal';
import Sidebar from "./Components/Sidebar";
import Title from "./Components/Title";

import './App.css';

// Define the Holiday type
export type Holiday = {
  id: number;
  date: string;
  localName:  string;
  name: string;
countryCode: string;
  starred: boolean;
};

// Main application component
export default function App() {
  const [holidays, setHolidays] = useState<Holiday[]>([
   

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



return (
    <div className="d-flex flex-column vh-100">
        <Title />
        {/*<AddHolidayForm onSubmit={handleAddHoliday} />  */}
        <Sidebar holidays={holidays} onAddHoliday={openModal} />
<Modal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleAddHoliday}/>
        <div className="container mt-5">
            <div className="container-fluid">
                <div className="d-flex">
                {/* <Sidebar holidays={holidays} onAddHoliday={handleAddHoliday} /> */}
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
    </div>
);

}