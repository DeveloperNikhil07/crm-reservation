"use client";
import { useState } from 'react';
import DatePicker from 'react-datepicker';
export default function AffiliateClickPage() {
    const [selectedFromDate, setSelectedFromDate] = useState(null);
    const [selectedToDate, setSelectedToDate] = useState(null);
    // Handle date change for "From Date"
    const handleFromDateChange = (date) => {
        setSelectedFromDate(date);
    };

    // Handle date change for "To Date"
    const handleToDateChange = (date) => {
        setSelectedToDate(date);
    };
    return (
        <>
            <section className="manage-vacation-wrapp leadbooking-flight pb bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title text-center py">
                                <h1>Affiliate Clicks</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-wrapper">
                                <form action="" method='post' className="row justify-content-center">
                                    <div className="col-12 col-md-3 mt-3 mt-md-0">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="booking_from_date">Booking From Date</label>
                                            <DatePicker
                                                selected={selectedFromDate}
                                                id="booking_from_date"
                                                onChange={handleFromDateChange}
                                                dateFormat="yyyy MMM, d"
                                                className='form-control'
                                                placeholderText='Select Date'
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3 mt-md-0">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="booking_from_date">Booking From Date</label>
                                            <DatePicker
                                                selected={selectedToDate}
                                                id="booking_from_date"
                                                onChange={handleToDateChange}
                                                dateFormat="yyyy MMM, d"
                                                className='form-control'
                                                placeholderText='Select Date'
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <button type="submit" className="cm-button">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
