type AddHolidayButtonProps = {
    holidays?: string[]; // Optional array of holidays
    onAddHoliday: (e: React.MouseEvent) => void; // Callback for when the button is clicked
};

export default function AddHolidayButton({ holidays, onAddHoliday }: AddHolidayButtonProps) {
    function handleHolidayClick(e: React.MouseEvent) {
        console.log('handleHolidayClick()', e);
        if (onAddHoliday) { // Call the correct function
            onAddHoliday(e);
        }
    }

    return (
        <button
            type="button"
            onClick={handleHolidayClick} // Use the corrected function name
            className="btn btn-primary position-relative btn-rounded btn-lg"
        >
            Add Holiday 
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {holidays?.length || 0} <span className="visually-hidden">holidays</span>
            </span>
        </button>
    );
}
