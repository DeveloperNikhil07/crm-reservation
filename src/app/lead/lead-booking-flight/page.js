"use client";
import { useEffect, useState } from 'react';
import React, { useRef } from 'react';
import "jspdf-autotable";
import SearchFromDate from '../../components/searchFromDate/SearchFromDate'
import SearchToDate from '../../components/searchToDate/SearchToDate';
import TableRowController from '../../components/TableDataRowDropdown/TableDataRowController';
import SearchBar from '../../components/TableDataSearchBar/TableDataSearchBar'
import PdfDownloadBtn from '../../components/PdfDownloadBtn/PdfDownloadBtn';
import ExcelDownloadBtn from '../../components/ExcelDownloadBtn/ExcelDownloadBtn';
import ShowTotalEntery from '../../components/ShowTotalEnteryNumber/ShowTotalEnteryNum';

export default function LeadBookingFlight({ tableData }) {

    // State for pagination
    const tableRef = useRef(null);
    // Fetch Data From Api
    const getCurrentDate = () => {
        const today = new Date();
        return `${("0" + (today.getMonth() + 1)).slice(-2)}/${("0" + today.getDate()).slice(-2)}/${today.getFullYear()}`;
    };
    const [leadBookingReport, setLeadBookingReport] = useState({
        domain: null,
        provider: null,
        callType: null,
        phoneNumber: null,
        email: null,
        callerName: null,
        queryType: null,
        leadStatus: null,
        remark: null,
        bookingRef: null,
        createdDateFrom: getCurrentDate(),
        createdDateTo: getCurrentDate(),
        createdBy: null,
        id: null,
        bookingCurrency: null,
        currencyRate: null,
        tBasefare: null,
        loginId: 0,
        roleType: null,
        inRoleid: 0,
        leadId: null,
        callerEmail: null,
        airlineCode: null,
        totalRecords: 0,
        pageSize: 10000,
        pageNumber: 1,
        tenantId: 0
    });
    const [leadBookingData, setLeadBookingData] = useState([]);
    const [rowsToShow, setRowsToShow] = useState(10);
    const Url = "http://192.168.0.151:818/api/Reports/GetLeadBooking";
    const LeadBookingApi = async () => {
        try {
            const DataRes = await fetch(Url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache',
                },
                body: JSON.stringify(leadBookingReport),
            });

            if (!DataRes.ok) {
                console.log('Api Response: Failed to fetch data');
            }

            const LeadBookingdata = await DataRes.json();
            setLeadBookingData(LeadBookingdata);
            setLeadBookingData(LeadBookingdata.data || []);
        } catch (error) {
            console.error('Error:', error);
            alert('Error fetching data');
        }
    };

    useEffect(() => {
        LeadBookingApi();
    }, []);
    // End Api

    // Select Row DropDown Start
    const handleRowsChange = (tableRow) => {
        if (tableRow === 0 || tableRow === "all") {
            setRowsToShow(leadBookingData.length); // Show all rows
        } else {
            setRowsToShow(tableRow); // Show specific number of rows
        }
    };
    // Slice
    const displayedRows = rowsToShow >= leadBookingData.length ? leadBookingData : leadBookingData.slice(0, rowsToShow);
    // End Here

    // Searchbar code start

    const [searchTerm, setSearchTerm] = useState(""); // For search functionality
    const [filteredData, setFilteredData] = useState([]); // Filtered data
    // Handle search functionality
    useEffect(() => {
        if (searchTerm) {
            const filtered = leadBookingData.filter((row) =>
                Object.values(row).some((val) =>
                    (val?.toString() || '').toLowerCase().includes(searchTerm.toLowerCase()) // Safe toString handling
                )
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(leadBookingData); // If no search term, show all data
        }
    }, [searchTerm, leadBookingData]);
    // Slice the data based on rowsToShow
    // End

    // Form Data Start
    const LeadSubmitHandle = (e) => {
        e.preventDefault();
        console.log("Form submitted:", leadBookingReport)
        LeadBookingApi();
    }
    const LeadInputHandle = (e) => {
        const { name, value } = e.target;
        setLeadBookingReport((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log(leadBookingReport)
    }
    const handleDateChange = (name, date) => {
        if (date) {
            const formattedDate = date.toLocaleDateString('en-US'); // Format: MM/dd/yyyy
            setLeadBookingReport({
                ...leadBookingReport,
                [name]: formattedDate,
            });
        } else {
            setLeadBookingReport({
                ...leadBookingReport,
                [name]: '',
            });
        }
    };
    // Form End

    return (
        <>
            <section className="manage-vacation-wrapp leadbooking-flight pb bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title text-center py">
                                <h1>Lead Booking Reports</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-wrapper">
                                <form action="" onSubmit={LeadSubmitHandle} method='post' className="row">
                                    {/* Display first 8 fields */}
                                    <div className="col-12 col-md-3 mt-3 mt-md-0">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="booking_refer">Booking Reference</label>
                                            <input type="text" className='form-control' id='booking_refer' placeholder='Enter Booking Reference' name='bookingRef' value={leadBookingReport.name} onChange={LeadInputHandle} />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="call_type">Call Type</label>
                                            <input type="phone" name='callType' value={leadBookingReport.name} onChange={LeadInputHandle} className='form-control' id='call_type' placeholder='Enter Call Type' />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3 mt-md-0">
                                        <div className='form-fields'>
                                            <SearchFromDate label="From Date" value={leadBookingReport.createdDateFrom} onChange={(date) => handleDateChange('createdDateFrom', date)} />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3 mt-md-0">
                                        <div className='form-fields'>
                                            <SearchToDate label="To Date" value={leadBookingReport.createdDateTo} onChange={(date) => handleDateChange('createdDateTo', date)} />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="caller_name">Caller Name</label>
                                            <input type="text" name='callerName' value={leadBookingReport.name} onChange={LeadInputHandle} className='form-control' id='caller_name' placeholder='Enter Caller Name' />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="caller_email">Caller Email</label>
                                            <input type="email" name='callerEmail' value={leadBookingReport.name} onChange={LeadInputHandle} className='form-control' id='caller_email' placeholder='Enter Caller Email' />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="phone_number">Phone Number</label>
                                            <input type="phone" name='phoneNumber' value={leadBookingReport.name} onChange={LeadInputHandle} className='form-control' id='phone_number' placeholder='Enter Phone Number' />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="lead_status">Lead Status</label>
                                            <input type="phone" name='leadStatus' value={leadBookingReport.name} onChange={LeadInputHandle} className='form-control' id='lead_status' placeholder='Enter Lead Status' />
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
            <section className="agent-activity-wrap pb lead-booking-flight-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="agent-tabs">
                                <ul className="agent-tabs-list">
                                    <li>
                                        <TableRowController onRowsChange={handleRowsChange} tableData={tableData} />
                                    </li>
                                    <li>
                                        <ExcelDownloadBtn tableRef={tableRef} fileName="booking-lead-report.xlsx" />
                                    </li>
                                    <li>
                                        <PdfDownloadBtn tableRef={tableRef} fileName="booking-lead-report.pdf" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mt-3 mt-lg-0">
                            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="user-login-data-wrap lead-flight-booking-table">
                            <table ref={tableRef}>
                                <thead>
                                    <tr>
                                        <th>Reference No</th>
                                        <th>Call Type</th>
                                        <th>Caller Name</th>
                                        <th>Caller Email</th>
                                        <th>Phone Number</th>
                                        <th>Query Type</th>
                                        <th>Lead Status</th>
                                        <th>Created By</th>
                                        <th>Remark</th>
                                        <th>Lead Date</th>
                                        <th>Booking Currency</th>
                                        <th>Currency Rate </th>
                                        <th>Base Fare</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(displayedRows) && displayedRows.length > 0 ? (
                                        displayedRows.map((LeadItem, index) => (
                                            <tr key={index}>
                                                <td>{LeadItem.bookingRef}</td>
                                                <td>{LeadItem.callType}</td>
                                                <td>{LeadItem.callerName}</td>
                                                <td>{LeadItem.callerEmail}</td>
                                                <td>{LeadItem.phoneNumber}</td>
                                                <td>{LeadItem.queryType}</td>
                                                <td>{LeadItem.leadStatus}</td>
                                                <td>{LeadItem.createdBy}</td>
                                                <td>{LeadItem.remark}</td>
                                                <td>{LeadItem.leadDate}</td>
                                                <td>{LeadItem.bookingCurrency}</td>
                                                <td>{LeadItem.currencyRate}</td>
                                                <td>{LeadItem.tBasefare}</td>
                                                <td>{LeadItem.action}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr><td colSpan={14}>No data available</td></tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <ShowTotalEntery displayedRows={displayedRows}
                            leadBookingData={leadBookingData}
                            rowsToShow={rowsToShow} />
                    </div>
                </div>
            </section>

        </>
    )
}
