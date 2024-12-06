"use client";

import axios from 'axios';

// Base URL for the API
const ApiUrl = "https://dummyjson.com";

// Function to fetch data from the API
export const demoApi = async () => {
    try {
        const response = await axios.get(`${ApiUrl}/todos`);
        return response.data; // Return the data from the response
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error; // Re-throw the error for further handling
    }
};
