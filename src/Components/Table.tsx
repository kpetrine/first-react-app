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
  isLoading: Boolean; // Array of holidays to display
  toggleStarred: (id: number) => void; // Function to toggle starred status
  handleUpdateHoliday: (id: number, updatedHoliday: Partial<Holiday>) => void; // Function to update holiday
  handleDeleteHoliday: (id: number) => void; // Function to delete holiday
}

const Table: React.FC<TableProps> = ({
  isLoading,
  holidays,
  toggleStarred,
  handleUpdateHoliday,
  handleDeleteHoliday,
}) => {
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
                  <button
                    onClick={() =>
                      handleUpdateHoliday(holiday.id, { date: "new date here" })
                    }
                  >
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
      )}
    </div>
  );
};

export default Table;
