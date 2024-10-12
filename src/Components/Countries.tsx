

export default function Countries() {
    // Define the list of countries outside the return statement
    const countries = [
        {
            id: 'USA',
            name: 'United States of America',
        },
        {
            id: 'AUS',
            name: 'Australia', // Corrected spelling
        },
        {
            id: 'GBR',
            name: 'United Kingdom',
        },
        {
            id: 'CAN',
            name: 'Canada',
        },
    ];

    return (
        <div>
            <h1>Countries</h1>
            <ul>
                {countries.map(country => (
                    <li key={country.id}>{country.name}</li>
                ))}
            </ul>
        </div>
    );
}
