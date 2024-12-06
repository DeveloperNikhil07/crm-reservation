"use client";
import SearchFromDate from "../../components/searchFromDate/SearchFromDate";
import SearchToDate from "../../components/searchToDate/SearchToDate";
import React, { useEffect, useState } from "react";
export default function page() {


    // Sample data for the table
    const [data] = useState([
        { agent: "Adarsh", action: "Login", time: "2024-11-16 08:26 AM" },
        { agent: "Admin", action: "Login", time: "2024-11-16 08:59 AM" },
        { agent: "John", action: "Logout", time: "2024-11-16 09:15 AM" },
        { agent: "Doe", action: "Login", time: "2024-11-16 10:00 AM" },
        { agent: "Alex", action: "Logout", time: "2024-11-16 10:30 AM" },
        { agent: "Mary", action: "Login", time: "2024-11-16 11:00 AM" },
        { agent: "Bob", action: "Logout", time: "2024-11-16 11:30 AM" },
        { agent: "Alice", action: "Login", time: "2024-11-16 12:00 PM" },
        { agent: "Max", action: "Logout", time: "2024-11-16 12:30 PM" },
        { agent: "Eve", action: "Login", time: "2024-11-16 01:00 PM" },
    ]);
    return (
        <>
            <section className="manage-vacation-wrapp leadbooking-flight pb bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title text-center py">
                                <h1>Get Your Reports For Enquiry, Contact US, Subscription</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-wrapper">
                                <form action="" method='post' className="row justify-content-center">
                                    <div className="col-12 col-md-3 my-3 my-md-0">
                                        <div className='form-fields'>
                                            <label htmlFor="" className='form-label'>Website Name</label>
                                            {/* <input type="text" className="form-control" /> */}
                                            <select name="websiteName" id="" className="form-control">
                                                <option value="">-- Website Name --</option>
                                                <option value="JourneyHoper">JourneyHoper</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="">User Request Type</label>
                                            <select name="UserRequestType" id="" className='form-control'>
                                                <option value="select">-- Select User Request Type --</option>
                                                <option value="Contact Us">Contact Us / Customer Support</option>
                                                <option value="Subscription">Subscription</option>
                                                <option value="Group Booking">Group Booking</option>
                                                <option value="Call Back Request">Call Back Request</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 my-3 my-md-0">
                                        <div className='form-fields'>
                                            <SearchFromDate label="From Date" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3">
                                        <div className='form-fields'>
                                            <SearchToDate label="To Date" />
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <button type="submit" className="cm-button">Submit</button>
                                    </div>
                                </form>
                                {/* <div className="col-12 mt-3">
                                    <div className="total-row text-center">
                                        <h6>Total No Of Subscription:- <span className='total-booking'>0</span></h6>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-12 col-lg-6">
                            <div className="agent-tabs">
                                <ul className="agent-tabs-list">
                                    <li>
                                        <div className="row-dropdown">
                                            <button type="button">Rows</button>
                                            <div className="dropdown-list">
                                                {/* Row Tabs */}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mt-3 mt-lg-0">
                            <div className="searchbar-field d-flex align-items-center justify-content-end">
                                {/* Search Bar */}
                            </div>
                        </div>
                        <div className="user-login-data-wrap common-report-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>S.No.</th>
                                        <th>Website Name</th>
                                        <th>Email Id</th>
                                        <th>Contact Number</th>
                                        <th>Booking I'd</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Table Data */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
