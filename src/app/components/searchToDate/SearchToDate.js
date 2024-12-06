"use client";
import DatePicker from "react-datepicker";

export default function SearchToDate({ label, value, onChange }) {
    // Calculate the min and max dates for the current year
    const currentYear = new Date().getFullYear();
    const minDate = new Date(currentYear, 0, 1); // January 1st of the current year
    const maxDate = new Date(currentYear, 11, 31); // December 31st of the current year
    return (
        <>
            <label className='form-label' htmlFor="search_to_date">{label}</label>
            <DatePicker
                selected={value}
                onChange={onChange}
                placeholderText="Select Date"
                dateFormat="MM/dd/yyyy"
                className="form-control"
                id="search_to_date"
                minDate={minDate}
                maxDate={maxDate}
                 />
        </>
    )
}
