import { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Title from "../Components/Title";
import Modal from "../Components/modal";
import Table from "../Components/Table";
import { Holiday } from "../Components/types";

type loading = boolean;

// Main App component
function App() {
  const [holidays, setHolidays] = useState<Holiday[]>([]); // Store holidays data
  const [isLoading, setIsLoading] = useState<loading>(false); // Loading state for call to db.json

  useEffect(() => {
    getHolidays(); // Fetch holidays on component mount
  }, []);

  const URL = "http://localhost:3000/holidays"; // db.json endpoint

  // Fetch holidays data from the server
  const getHolidays = async () => {
    try {
      setIsLoading(true);
      let response = await fetch(URL);
      let data = await response.json();
      console.log("data: ", data);
      setHolidays(data); // Update holidays state with the fetched data
      setIsLoading(false);
    } catch (error) {
      console.error(error); // Log error if the fetch fails
    }
  };

  // Handle adding a new holiday
  const handleAddHoliday = (newHoliday: Holiday) => {
    setHolidays((prevHolidays) => [...prevHolidays, newHoliday]);
    closeModal();
  };

  // Update existing holiday details
  const handleUpdateHoliday = (
    id: number,
    updatedHoliday: Partial<Holiday>
  ) => {
    setHolidays((prevHolidays) =>
      prevHolidays.map((holiday) =>
        holiday.id === id ? { ...holiday, ...updatedHoliday } : holiday
      )
    );
  };

  // Delete a holiday
  const handleDeleteHoliday = (id: number) => {
    setHolidays(holidays.filter((holiday) => holiday.id !== id));
  };

  // Toggle the 'starred' state of a holiday
  const toggleStarred = (id: number) => {
    setHolidays(
      holidays.map((holiday) =>
        holiday.id === id ? { ...holiday, starred: !holiday.starred } : holiday
      )
    );
  };

  // Modal open/close
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  console.log("Holidays state:", holidays);

  return (
    <div className="app-container">
      <Title />
      <Sidebar holidays={holidays} onAddHoliday={openModal} />

      <div>
        <h1>Holiday List</h1>
        <Table
          isLoading={isLoading}
          holidays={holidays}
          toggleStarred={toggleStarred}
          handleUpdateHoliday={handleUpdateHoliday}
          handleDeleteHoliday={handleDeleteHoliday}
        />
      </div>

      {/* Modal component */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleAddHoliday}
      />
    </div>
  );
}

export default App;
