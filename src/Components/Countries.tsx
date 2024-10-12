import React from 'react';

// Define an interface for the props
interface CountriesProps {
    title: string; // title should be a string
}

// Define the Countries component that accepts a title prop
const Countries: React.FC<CountriesProps> = ({ title }) => {
    // Define the countries array
    const countries = [
        { id: 'USA', name: 'United States of America' },
        { id: 'AUS', name: 'Australia' },
        { id: 'GBR', name: 'United Kingdom' },
        { id: 'CAN', name: 'Canada' },
    ];

    return (
        <div>
            <h1>{title}</h1> {/* Using the title prop here */}
            <ul>
                {countries.map(country => (
                    <li key={country.id}>{country.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Countries;
