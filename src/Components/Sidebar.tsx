
import AddHolidayButton from "./AddHolidayButton";
import { Holiday } from '../App'; // Adjust the import path as necessary


type SidebarProps = {
  holidays: Holiday[];
  onAddHoliday: (holiday: Holiday) => void;
};

export default function Sidebar({ holidays, onAddHoliday }: SidebarProps) {
  const handleAddHoliday = () => {
    // Example logic for adding a holiday
    const newHoliday: Holiday = {
      id: holidays.length + 1, // Simple ID generation
      name: 'New Holiday',
      countries: ['USA'],
      quarter: 'Q1',
      dates: ['01/01/2025'],
    };
    onAddHoliday(newHoliday);
    console.log("Add holiday clicked", newHoliday);
  };

  return (
    <nav className="bg-light w-64 h-full">
      <div className="p-4">
        <ul className="space-y-2">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              <i className="bi bi-house-fill"></i>
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link control-add-user" aria-current="page" href="#">
              <i className="bi bi-country-add"></i>
              Add Country
            </a>
          </li>
          <li>
            <AddHolidayButton onAddHoliday={handleAddHoliday} />
          </li>
        </ul>
      </div>
    </nav>
  );
}
