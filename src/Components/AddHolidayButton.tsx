type AddHolidayButtonProps = {
  onAddHoliday: () => void; // Prop to handle the 'Add Holiday' button click
};

export default function AddHolidayButton({
  onAddHoliday,
}: AddHolidayButtonProps) {
  return (
    // Button that triggers onAddHoliday function when clicked
    <button
      type="button"
      onClick={onAddHoliday}
      className="btn btn-primary position-relative btn-rounded btn-lg"
    >
      Add Holiday
      <span className="position-absolute top-0 start-100 translate-middle rounded-pill bg-danger">
        <span className="visually-hidden">holidays</span>
      </span>
    </button>
  );
}
