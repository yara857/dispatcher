import React, { useEffect, useState } from 'react'

const ShipperGetAd = () => {
    const [apiData, setApiData] = useState([]);
    const [error, setError] = useState(null);
    const baseUrl = 'https://uship.onrender.com';
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${baseUrl}/shippers/ads`); // Replace with your API endpoint

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setApiData(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            {error && <p>Error: {error}</p>}
            {apiData.length > 0 && (
                <div>
                    <h1>API Data:</h1>
                    <table>
                        <thead>
                            <tr>
                                {/* Assuming the first row in your data contains column headers */}
                                {Object.keys(apiData[0]).map((header) => (
                                    <th key={header}>{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {apiData.map((row, index) => (
                                <tr key={index}>
                                    {Object.values(row).map((value, columnIndex) => (
                                        <td key={columnIndex}>{value}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default ShipperGetAd
