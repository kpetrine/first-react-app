import { useState } from 'react';
import Modal from './Components/modal';
import Sidebar from "./Components/Sidebar";
import Title from "./Components/Title";
import SearchForm from './Components/AddHolidayForm'; 
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
    {
    id: 1,
    date: "2025-01-01",
    localName: 'New Years Day',
    name: 'New Years Day',
    countryCode: 'US',
    starred: false,
    },
    
    {
    id: 2,
    date: "2025-02-17",
    localName: 'Washingtons Birthday',
    name: 'Presidents Day',
    countryCode: 'US',
    starred: false,
    },

    {
    id: 3,
     date: "2025-05-26",
    localName: 'Memorial Day',
    name: 'Memorial Day',
    countryCode: 'US',
    starred: false,
    },

    {
    id: 4,
     date: "2025-07-04",
    localName: 'Independence Day',
    name: 'Independence Day',
    countryCode: 'US',
    starred: false,
    },

    {
    id: 5,
     date: "2025-09-01",
    localName: 'Labour Day',
    name: 'Labor Day',
    countryCode: 'US',
    starred: false,
    },

    {
    id: 6,
     date: "2025-10-13",
    localName: 'Columbus Day',
    name: 'Columbus Day',
    countryCode: 'US',
    starred: false,
    },

    {
    id: 7,
     date: "2025-10-13",
    localName: 'Indigenous Peoples Day',
    name: 'Indigenous Peoples Day',
    countryCode: 'US',
    starred: false,
    },

     {
    id: 8,
     date: "2025-11-11",
    localName: 'Veterans Day',
    name: 'Veterans Day',
    countryCode: 'US',
    starred: false,
    },

    
  {
    id: 9,
     date: "2025-11-27",
    localName: 'Thanksgiving Day',
    name: 'Thanksgiving Day',
    countryCode: 'US',
    starred: false,
    },   

  
    {
    id: 10,
    date: "2025-12-25",
    localName: 'Christmas Day',
    name: 'Christmas Day',
    countryCode: 'US',
    starred: false,
    }, 
 
]
  );

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