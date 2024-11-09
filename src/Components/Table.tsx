import React, { useState } from "react";

// Define the Holiday type
type Holiday = {
  id: number;
  date: string;
  localName: string;
  name: string;
  countryCode: string;
  starred: boolean;
};

// {Table component-define props
interface TableProps {
  holidays: Holiday[];
  isLoading: boolean;
  toggleStarred: (id: number) => void;
  handleUpdateHoliday: (id: number, updatedHoliday: Partial<Holiday>) => void;
  handleDeleteHoliday: (id: number) => void;
}

const Table: React.FC<TableProps> = ({
  isLoading,
  holidays,
  toggleStarred,
  handleUpdateHoliday,
  handleDeleteHoliday,
}) => {
  const [editingHolidayId, setEditingHolidayId] = useState<number | null>(null); // Track holiday being edited
  const [newDate, setNewDate] = useState<string>(""); // store new date

  // Handle date input change
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewDate(e.target.value);
  };
  // Toggle edit mode for a holiday
  const handleUpdateClick = (id: number) => {
    setEditingHolidayId((prevId) => (prevId === id ? null : id)); // Toggle between editing or not
    const holidayToUpdate = holidays.find((holiday) => holiday.id === id);
    if (holidayToUpdate) {
      setNewDate(holidayToUpdate.date);
    }
  };
  // Submit updated date to parent handler
  const handleSubmitUpdate = (id: number) => {
    if (newDate) {
      handleUpdateHoliday(id, { date: newDate });
      setEditingHolidayId(null);
      setNewDate("");
    }
  };

  return (
    <div>
      {isLoading && <p>Loading Holidays...</p>}
      {!isLoading && (
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
          <tbody className="holidays-list">
            {holidays.map((holiday) => (
              <tr key={holiday.id}>
                <td>{holiday.date}</td>
                <td>{holiday.name}</td>
                <td>{holiday.localName}</td>
                <td>{holiday.countryCode}</td>
                <td>
                  <button onClick={() => toggleStarred(holiday.id)}>
                    {holiday.starred ? "Unstar" : "Star"}
                  </button>

                  {editingHolidayId === holiday.id && (
                    <div>
                      <input
                        type="date"
                        value={newDate}
                        onChange={handleDateChange}
                      />
                      <button onClick={() => handleSubmitUpdate(holiday.id)}>
                        Update Date
                      </button>
                    </div>
                  )}

                  <button onClick={() => handleUpdateClick(holiday.id)}>
                    {editingHolidayId === holiday.id ? "Cancel" : "Edit Date"}
                  </button>

                  <button onClick={() => handleDeleteHoliday(holiday.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
