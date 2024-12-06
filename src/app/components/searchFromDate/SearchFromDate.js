"use client";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const SearchFromDate = ({ label, value, onChange }) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth(); // 0-based index (0 = January, 11 = December)

    // Calculate minDate (start of the year) and maxDate (end of the current month)
    const minDate = new Date(currentYear, 0, 1); // January 1st of the current year
    const maxDate = new Date(currentYear, currentMonth, currentDate.getDate()); // Today's date in current month

    // Logic to allow dates only within the current month (until the start of the next month)
    const isNextMonth = currentDate.getDate() === 1; // Check if today is the 1st of the month

    return (
        <>
            <label className="form-label" htmlFor="search_from_date">{label}</label>
            <DatePicker
                selected={value}
                onChange={onChange}
                id="search_from_date"
                className="form-control"
                placeholderText="Select Date"
                dateFormat="MM/dd/yyyy"
                minDate={minDate}
                maxDate={isNextMonth ? new Date(currentYear, currentMonth + 1, 0) : maxDate}
                />
        </>
    );
};

export default SearchFromDate;
