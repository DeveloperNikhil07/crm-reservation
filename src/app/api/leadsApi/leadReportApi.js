import axios from 'axios';

// Base URL for the API
const ApiBaseUrl = "https://reqres.in/api";

// Make sure to pass the appropriate data when calling this API
export const leadReportApi = async (dataAct) => {
    try {
        const response = await axios.get(`${ApiBaseUrl}/users`, dataAct,
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        );

        return response.data;
    } catch (err) {
        console.error("Error fetching data from the API:", err);
        return { error: "Failed to fetch data." };
    }
}
