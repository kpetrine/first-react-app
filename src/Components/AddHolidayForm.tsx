import { useState } from 'react';

// Define the prop types
interface AddHolidayFormProps {
    onSubmit: (holiday: { 
        id: number; 
        date: string; 
        localName: string; 
        name: string; 
        countryCode: string; 
        starred: boolean 
    }) => void;
}

export default function AddHolidayForm({ onSubmit }: AddHolidayFormProps) {
    const initialInputs = {
        date: "",
        localName: "",
        name: "",
        countryCode: ""
    };

    const [inputs, setInputs] = useState(initialInputs);

    // Handle change of form inputs
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // Only submit if all fields are filled
        if (inputs.date && inputs.localName && inputs.name && inputs.countryCode) {
            const newHoliday = {
                id: Date.now(), // Unique ID
                ...inputs,
                starred: false, // Default value for starred
            };

            // Pass the new holiday to the parent component
            onSubmit(newHoliday);

            // Reset the form
            setInputs(initialInputs);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter the date:
                <input 
                    type="date" 
                    name="date" 
                    value={inputs.date} 
                    onChange={handleChange} 
                />
            </label>
            
            <label>Enter the local name for the holiday:
                <input 
                    type="text" 
                    name="localName" 
                    value={inputs.localName} 
                    onChange={handleChange} 
                />
            </label>

            <label>Enter the name for the holiday:
                <input 
                    type="text" 
                    name="name" 
                    value={inputs.name} 
                    onChange={handleChange} 
                />
            </label>

            <label>Enter the country where the holiday is celebrated:
                <input 
                    type="text" 
                    name="countryCode" 
                    value={inputs.countryCode} 
                    onChange={handleChange} 
                />
            </label>
            <input type="submit" />
        </form>
    );
}

