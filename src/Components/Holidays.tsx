import Holiday from '../pages/HomePage';

type Holiday = {
    id: number;
    date: string;
    localName: string;
    name: string;
    countryCode: string;
    starred: boolean;
  };

type HolidaysProps = {
    holidays: Holiday[]; // Holiday array
    onDelete: (id: number) => void; // delete holiday function
};

export default function Holidays({ holidays, onDelete }: HolidaysProps) {
    // delete holiday function
    function handleDelete(id: number) {
       
        if (onDelete) {
            onDelete(id); // onDelete function passed as prop
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
