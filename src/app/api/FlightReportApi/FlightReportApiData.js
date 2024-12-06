"use client"
import axios from 'axios';

// Base URL for the API
const ApiBaseUrl = "http://api/Reports";

// Function to fetch data from the API
export const FlightReportApi = async (dataAct) => {
    try {
        const response = await axios.post(`${ApiBaseUrl}/GetFlightBookingReports`,
            dataAct, // Pass the dataAct object here
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        return response.data;
    } 
    catch (error) {
        // Log full error information to the console
        if (error.response) {
            // If the error response is present, log the response details
            console.error("Error Response:", error.response);
            console.error("Error Status:", error.response.status);
            console.error("Error Data:", error.response.data);
        } else if (error.request) {
            // If the request was made but no response was received
            console.error("Error Request:", error.request);
        } else {
            // Other errors like incorrect setup
            console.error("Error Message:", error.message);
        }
        console.error("Error Stack Trace:", error.stack);
        throw error; // Re-throw the error for further handling
    }
};
