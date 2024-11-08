// Define the Holiday type
type Holiday = {
  id: number;
  date: string;
  localName: string;
  name: string;
  countryCode: string;
  starred: boolean;
};

// Define the Table component with props
interface TableProps {
  holidays: Holiday[];
  isLoading: boolean; // Array of holidays to display
  toggleStarred: (id: number) => void; // Function to toggle starred status
  handleUpdateHoliday: (id: number, updatedHoliday: Partial<Holiday>) => void; // Function to update holiday
  handleDeleteHoliday: (id: number) => void; // Function to delete holiday
}

// type newDate = boolean
// type setNewDate = boolean

const Table: React.FC<TableProps> = ({
  isLoading,
  holidays,
  toggleStarred,
  handleUpdateHoliday,
  handleDeleteHoliday,
}) => {

  const [editingHolidayId, setEditingHolidayId] = useState<number | null>(null);
  const [newDate, setNewDate] = useState<string>("");

  // Handle the date change
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewDate(e.target.value);
  };

  // Handle to update a holiday's date
  const handleUpdateClick = (id: number) => {
    if (editingHolidayId === id) {
      setEditingHolidayId(null); 
    } else {
      setEditingHolidayId(id); 
      const holidayToUpdate = holidays.find((holiday) => holiday.id === id);
      if (holidayToUpdate) {
        setNewDate(holidayToUpdate.date); 
      }
    }
  };

  // Handle updating the date of a holiday
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
          <tbody className="holidays-list" id="tbody">
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
                  
                  {/* Show date input only for the holiday being edited */}
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

                  {/* Toggle update date editor */}
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