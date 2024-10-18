type AddHolidayButtonProps = {
    onAddHoliday: () => void; // Updated to match the handler signature
};

export default function AddHolidayButton({ onAddHoliday }: AddHolidayButtonProps) {

  





    return (
        <button
            type="button"
            onClick={onAddHoliday}
            className="btn btn-primary position-relative btn-rounded btn-lg"
        >
            Add Holiday
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {/* You can display a count or notification here if needed */}
                <span className="visually-hidden">holidays</span>
            </span>
        </button>
    );
}
