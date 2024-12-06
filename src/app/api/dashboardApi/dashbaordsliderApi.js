"use client";

import axios from 'axios';
// Base URL for the API
const ApiBaseUrl = "http://192.168.0.151:818/api/Reports"
// Function to fetch data from the API
export const DashboardCardSliderApi = async () => {
    try {
        const response = await axios.get(`${ApiBaseUrl}/GetDashboardReports`);
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error; // Re-throw the error for further handling
    }
};
  