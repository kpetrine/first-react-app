import { Holiday } from '../App';


type HolidaysProps = {
    holidays: Holiday[];
    onDelete: (id: number) => void;
};

export default function Holidays({ holidays, onDelete }: HolidaysProps) {
    function handleDelete(id: number) {
       
        if (onDelete) {
            onDelete(id);
        }
    }

    return (
        <div>
            <h1>Holidays</h1>
            <ul>
                {holidays.map(holiday => (
                    <li key={holiday.id}>
                        <strong>{holiday.name}</strong> ({holiday.localName})
                        <ul>

                            <li>Dates: {holiday.date}</li>
                            <li>
                                <button onClick={() => handleDelete(holiday.id)}>
                                    Delete
                                </button>
                            </li>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}
