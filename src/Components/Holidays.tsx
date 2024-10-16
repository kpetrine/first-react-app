import React, { useState } from 'react';

type HolidaysProps = {
    id: number;
    name: string;
    countries: string[];
    quarter: string;
    dates: string[];
    onDelete: (id: number) => void
}

export default function Holidays({ onDelete, ...props }: HolidaysProps) {
    const [holidays, setHolidays] = useState([
    // Define the holidays array 
    
        {
            id: 1,
            name: 'Mothers Day',
            countries: ['USA', 'CAN'],
            quarter: 'Q2',
            dates: [
                '05/11/2025',
                '05/10/2026',
                '05/09/2027',
                '05/14/2028',
                '05/13/2029',
            ],
        },
        {
            id: 2,
            name: 'Mothering Sunday',
            countries: ['GBR', 'AUS'],
            quarter: 'Q1',
            dates: [
                '03/30/2025',
                '03/15/2026',
                '03/07/2027',
                '03/26/2028',
                '03/11/2029',
            ],
        },
        {
            id: 3,
            name: 'Black Friday',
            countries: ['USA', 'GBR', 'CAN', 'AUS'],
            quarter: 'Q4',
            dates: [
                '11/29/2024',
                '11/28/2025',
                '11/27/2026',
                '11/26/2027',
                '11/24/2028',
                '11/23/2029',
            ],
        },
        {
            id: 4,
            name: 'Independence Day',
            countries: ['USA'],
            quarter: 'Q3',
            dates: ['07/04/2025'],
        },
        {
            id: 5,
            name: 'Canada Day',
            countries: ['CAN'],
            quarter: 'Q3',
            dates: ['07/10/2025'],
        },
        {
            id: 6,
            name: 'Australia Day', 
            countries: ['AUS'],
            quarter: 'Q1',
            dates: ['01/26/2025'],
        },
    ]);

  // Other holidays...


function handleDelete(e: React.MouseEvent, id: number) {
    if (onDelete) {
        onDelete(id); // Call the parent delete function
    }
    // Update the state to remove the holiday
    setHolidays(holidays.filter(holiday => holiday.id !== id));
}

return (
    <div>
        <h1>Holidays</h1>
        <ul>
            {holidays.map(holiday => (
                <li key={holiday.id}>
                    <strong>{holiday.name}</strong> (Quarter: {holiday.quarter})
                    <ul>
                        <li>Countries: {holiday.countries.join(', ')}</li>
                        <li>Dates: {holiday.dates.join(', ')}</li>
                        <li>
                            <button onClick={(e) => handleDelete(e, holiday.id)}>
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