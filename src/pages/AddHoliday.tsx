
import { useState } from 'react';
import AddHolidayForm from "../Components/AddHolidayForm"


// Define the Holiday type
export type Holiday = {
    id: number;
    date: string;
    localName:  string;
    name: string;
  countryCode: string;
    starred: boolean;
  };

export default function HomePage() {
    const [holidays, setHolidays] = useState<Holiday[]>([
        // {
        //     "id": 1234,
        //     "date": "2025-02-17",
        //     "localName": "Washington's Birthday",
        //     "name": "Presidents Day",
        //     "countryCode": "US",
        //     "starred": false
        // }        
    ])

    console.log("Holidays state:", holidays);
    
    return (
        <>
       <div>HolidayDetails {holidays} </div>
        <br />
        <AddHolidayForm />
        </>
    )
}