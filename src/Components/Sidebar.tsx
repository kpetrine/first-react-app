import AddHolidayButton from "./AddHolidayButton";
import { Holiday } from "../Components/types";

type SidebarProps = {
  holidays: Holiday[]; // list of holidays passed from parent
  onAddHoliday: (holiday: Holiday) => void; // callback funtion to add a holiday
};

export default function Sidebar({ holidays, onAddHoliday }: SidebarProps) {
  const handleAddHoliday = () => {
    // Example logic for adding a holiday
    const newHoliday: Holiday = {
      id: holidays.length + 1, // Simple ID generation
      date: "2025-05-11",
      localName: "Mothers Day",
      name: "Mothers Day",
      countryCode: "US",
      starred: false,
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

          <li>
            <AddHolidayButton onAddHoliday={handleAddHoliday} />
          </li>
        </ul>
      </div>
    </nav>
  );
}
