type AddHolidayButtonProps = {
    holidays?: string[]; // Optional array of holidays
    onFollow: (e: React.MouseEvent) => void; // Callback for when the button is clicked
};

export default function AddHolidayButton({ holidays, onFollow }: AddHolidayButtonProps) {
    function handleHolidayClick(e: React.MouseEvent) {
        console.log('handleHolidayClick()', e);
        if (onFollow) { // Call the correct function
            onFollow(e);
        }
    }

    return (
        <button
            type="button"
            onClick={handleHolidayClick} // Use the corrected function name
            className="btn btn-primary position-relative btn-rounded btn-lg"
        >
            Follow Me 
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {holidays?.length || 0} <span className="visually-hidden">holidays</span>
            </span>
        </button>
    );
}
