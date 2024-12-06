"use client";
import DatePicker from 'react-datepicker';
import { useState, useEffect, useCallback } from 'react';
import SearchFromDate from '../../components/searchFromDate/SearchFromDate';
import SearchToDate from '../../components/searchToDate/SearchToDate';
import ExcelDownloadBtn from '../../components/ExcelDownloadBtn/ExcDownload'
import PdfDownloadBtn from '../../components/PdfDownloadBtn/PdfDownloadBtn'
import React, { useRef } from 'react';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
DataTable.use(DT);
import { FlightReportApi } from '../../api/FlightReportApi/FlightReportApiData';


export default function FlightReports() {
    const getCurrentDate = () => {
        const today = new Date();
        return `${("0" + (today.getMonth() + 1)).slice(-2)}/${("0" + today.getDate()).slice(-2)}/${today.getFullYear()}`;
    };
    const [loading, setLoading] = useState(true); // Loading state
    const [confirmStatus, setConfirmStatus] = useState("");
    const tableRef = useRef(null);
    const [currentDate, setCurrentDate] = useState(getCurrentDate());
    const [showAllFields, setShowAllFields] = useState(false);
    const [affiliateData, setAffiliateData] = useState([]);
    const [bookingStatus, setBookingStatus] = useState([])
    const [provider, setProvider] = useState([]);
    const [bookingClass, setBookingClass] = useState([])
    const [ReportResponseData, setReportResponseData] = useState([]);
    const [ReportFormData, setReportFormData] = useState({
        requestDateFrom: currentDate,// "10/21/2024",
        requestDateto: currentDate,
        travelDate: null,
        affiliate: null,
        bookingReference: null,
        gdsPnr: null,
        ticketingCareer: null,
        bookingStatus: null,
        bookingClass: null,
        provider: null,
        bookingAmount: null,
        fareType: null,
        tripType: null,
        journeyType: null,
        riskScore: null,
        device: null,
        agent: 0,
        agentName: null,
        email: null,
        mobileNo: null,
        totalRecords: 0,
        pageSize: 100000,
        pageNumber: 1,
        tenantId: 0
    });
    // Fetch Flight report api
    const FetchReport = async () => {
        try {
            const ReportResponse = await FlightReportApi(ReportFormData);
            setReportResponseData(ReportResponse.data.flight_Booking_Report_Details); // Store response in a separate state
            setAffiliateData(ReportResponse.data.affiliate);
            setBookingClass(ReportResponse.data.bookingClass);
            setBookingStatus(ReportResponse.data.bookingStatus);
            setProvider(ReportResponse.data.provider);
            console.log(ReportResponse);
            console.log(ReportResponse.data.affiliate);
        } catch (err) {
            console.error("Error fetching report:", err);
        }
    }

    const handleForm = (e) => {
        e.preventDefault();
        FetchReport();
        console.log("Submitting form with data:", ReportFormData);
    };

    // Input
    const handleInput = (e) => {
        const { name, value } = e.target;
        setReportFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleDate = (name, date) => {
        if (date) {
            const formattedDate = date.toLocaleDateString('en-US');
            setReportFormData({
                ...ReportFormData,
                [name]: formattedDate,
            });
        } else {
            setReportFormData({
                ...ReportFormData,
                [name]: '',
            });
        }
    };

    useEffect(() => {
        FetchReport();
        setCurrentDate(getCurrentDate());
    }, []);

    // Handle toggle of "View More / View Less"
    const handleToggleFields = () => {
        setShowAllFields(prev => !prev);
    };
    // Confirm Status
    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const statusConfirm = queryParams.get('status'); // Extract status from URL query string
        if (statusConfirm) {
            setConfirmStatus(statusConfirm);  // Set the status in state
        }
        fatchStatusData();  // Call the function to fetch the status data
    }, []);

    // Api call for status
    const ReportDataStatus = async (dataRequestBody, setReportData) => {
        try {
            const ReportStatusRes = await FlightReportApi(dataRequestBody);  // Fetch data from the API
            const ReportResData = ReportStatusRes.data;  // Get the response data

            setReportData(ReportResData?.flight_Booking_Report_Details || []);  // Update the report data

            console.log("Status Api", ReportResData);  // Log the API response
        } catch (err) {
            console.log('Failed to fetch status data', err);  // Handle errors
        }
    }
    // Query Fetch Data 
    const fatchStatusData = async () => {
        const dataRequestBody = {
            bookingStatus: "Confirmed",
            requestDateFrom: "10/21/2024",
            pageSize: 1000,
            pageNumber: 1,
            tenantId: 0
        };

        // Pass the dataRequestBody to the ReportDataStatus function
        await ReportDataStatus(dataRequestBody, setReportResponseData);

        setLoading(false); // Set loading to false only when all requests are completed
    }

    useEffect(() => {
        if (confirmStatus) {
            fatchStatusData(); // Call to fetch the status data based on confirmStatus
        }
    }, [confirmStatus]);
    // Table Data
    const columns = [
        { title: "Id", data: "id" },
        { title: "Booking Id", data: "referenceNo" },
        { title: "Departure - Arrival", data: null, render: (row) => `${row.departCity || "N/A"} - ${row.arriveCity || "N/A"}` },
        { title: "Booking Date", data: "bookingDate" },
        { title: "Card Holder Name", data: "cardHolderName" },
        { title: "PNR No.", data: "gdsPnr" },
        { title: "Booking Status", data: "bookingStatus" },
        { title: "Trip Code - Trip Type - Booking Class", data: null, render: (row) => `${row.ticketingCareer || "N/A"} - ${row.tripType} - ${row.bookingClass}` },
        { title: "Fare Type - Journey Type - Provider", data: null, render: (row) => `${row.fareType || "N/A"} - ${row.journeyType || "N/A"} - ${row.provider || "N/A"}` },
        { title: "Adult - Child - Infant", data: null, render: (row) => `${row.adultCount || "N/A"} - ${row.childCount || "N/A"} - ${row.infantCount || "N/A"}` },
        { title: "Amount", data: "bookingAmount" },
        { title: "Departure Date - Arrival Date", data: null, render: (row) => `${row.departureDate || "N/A"} - ${row.arrivalDate} ` },
        { title: "CRM Status1", data: null, render: (row) => `Ban: ${row.ban || "N/A"} - Cal: ${row.cal} - Es: ${row.es} ` },
        { title: "CRM Status2", data: null, render: (row) => `AF: ${row.af || "N/A"} - SC: ${row.sc} - PAY: ${row.pay} ` },
        { title: "Device Type - IP Address", data: null, render: (row) => `Device: ${row.vcDevice || "N/A"} - RequestedIp: ${row.vcRequestedIp || "N/A"} - EmailId: ${row.emailId || "N/A"}` },
        { title: "CRM Status", data: null, render: (row) => `ISS: ${row.iss || "N/A"} - ETK: ${row.etk} - INV: ${row.inv} - ACT: ${row.act}` },
    ];

    return (
        <>
            <section className="manage-vacation-wrapp flight-booking-wrapper pb bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title text-center py">
                                <h1>Flight Booking Reports</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-wrapper">
                                <form action="" method='post' onSubmit={handleForm} className="row">
                                    <div className="col-12 col-md-3">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="select_affiliate">Affiliate</label>
                                            <select name="affiliate" value={ReportFormData.affiliate || ""} onChange={handleInput}
                                                id="select_affiliate" className="form-control">
                                                <option value="0">-- Select Affiliate --</option>
                                                {affiliateData.map((items, index) => (
                                                    <option key={index} value={items}>{items}</option>
                                                ))};
                                            </select>

                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3 mt-md-0">
                                        <div className='form-fields'>
                                            <SearchFromDate
                                                label="Booking From Date"
                                                value={ReportFormData.requestDateFrom}
                                                onChange={(date) => handleDate('requestDateFrom', date)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3 mt-md-0">
                                        <div className='form-fields'>
                                            <SearchToDate
                                                label="Booking To Date"
                                                value={ReportFormData.requestDateto}
                                                onChange={(date) => handleDate('requestDateto', date)}
                                            />

                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3 mt-md-0">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="booking_refer">Booking Reference</label>
                                            <input type="text" name='bookingReference' value={ReportFormData.name} onChange={handleInput} className='form-control' id='booking_refer' placeholder='Enter Booking Reference' />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="booking_pnr">Booking PNR</label>
                                            <input type="text" name='gdsPnr' value={ReportFormData.name} onChange={handleInput} className='form-control' id='booking_pnr' placeholder='Enter Booking PNR' />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="booking_status">Booking Status</label>
                                            <select name="bookingStatus" value={ReportFormData.bookingStatus || confirmStatus || "0"} onChange={handleInput} id="booking_status" className='form-control'>
                                                <option value="0">-- Select Status --</option>
                                                {bookingStatus.map((bookingStatusId, index) => (
                                                    <option key={index} value={bookingStatusId}>{bookingStatusId}</option>
                                                ))};
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="email">Email</label>
                                            <input type="email" name="email" value={ReportFormData.name} onChange={handleInput} className='form-control' id='email' placeholder='Enter Email' />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="phone">Phone Number</label>
                                            {/* <input type="text" name='mobileNo' value={formData.name} onChange={handleInputChange} className='form-control' id='phone' placeholder='Enter Phone Number' /> */}
                                            <input
                                                type="text"
                                                name="mobileNo"
                                                className='form-control'
                                                id='phone'
                                                placeholder='Enter Phone Number'
                                                value={ReportFormData.name}
                                                onChange={handleInput}
                                            />
                                        </div>
                                    </div>

                                    {/* Show remaining fields if 'showAllFields' is true */}
                                    {showAllFields && (
                                        <>
                                            <div className="col-12 col-md-3 mt-3">
                                                <div className='form-fields'>
                                                    <label className='form-label' htmlFor="booking_class">Booking Class</label>
                                                    <select name="bookingClass" value={ReportFormData.bookingClass} onChange={handleInput} id="booking_class" className='form-control'>
                                                        <option value="0">-- Select Option --</option>
                                                        {bookingClass.map((bookingClassId, index) => (
                                                            <option key={index} value={bookingClassId}>{bookingClassId}</option>
                                                        ))};
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-3 mt-3">
                                                <div className='form-fields'>
                                                    <label className='form-label' htmlFor="booking_amount">Booking Amount</label>
                                                    <input type="text" name='bookingAmount' value={ReportFormData.name} onChange={handleInput} className='form-control' id='booking_amount' placeholder='Enter Amount' />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-3 mt-3">
                                                <div className='form-fields'>


                                                    <label className='form-label' htmlFor="trip_type">Trip Type</label>
                                                    <select name="tripType" id="trip_type" value={ReportFormData.name} onChange={handleInput} className='form-control'>
                                                        <option value="select">-- Select Way --</option>
                                                        <option value="oneway">One Way</option>
                                                        <option value="roundway">Round Way</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-3 mt-3">
                                                <div className='form-fields'>
                                                    <label className='form-label' htmlFor="ticketing_carrier">Ticketing Carrier Code</label>
                                                    <input type="text" name='ticketingCareer' value={ReportFormData.name} onChange={handleInput} className='form-control' id='ticketing_carrier' placeholder='Enter Carrier Code' />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-3 mt-3">
                                                <div className='form-fields'>
                                                    <label className='form-label' htmlFor="travel_date">Travel Date</label>
                                                    <DatePicker
                                                        dateFormat="MM/dd/yyyy"
                                                        className="form-control"
                                                        placeholderText="Select Date"
                                                        name="travelDate"
                                                        onChange={(date) => handleDate('travelDate', date)}
                                                        selected={ReportFormData.travelDate}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-3 mt-3">
                                                <div className='form-fields'>
                                                    <label className='form-label' htmlFor="provider">Provider</label>
                                                    <select name="provider" value={ReportFormData.provider} onChange={handleInput} id="provider" className='form-control'>
                                                        <option value="0"> -- Select --</option>
                                                        {provider.map((providerId, index) => (
                                                            <option key={index} value={providerId}>{providerId}</option>
                                                        ))};
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-3 mt-3">
                                                <div className='form-fields'>
                                                    <label className='form-label' htmlFor="device">Device</label>
                                                    <select name="device" value={ReportFormData.name} onChange={handleInput} id="device" className='form-control'>
                                                        <option value="select"> -- Select Device --</option>
                                                        <option value="desktop">Desktop</option>
                                                        <option value="mobile">Mobile</option>
                                                        <option value="android">Android</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-3 mt-3">
                                                <div className='form-fields'>
                                                    <label className='form-label' htmlFor="journey_type">Journey Type</label>
                                                    <select name="journeyType" value={ReportFormData.name} onChange={handleInput} id="journey_type" className='form-control'>
                                                        <option value=""> -- Select type --</option>
                                                        <option value="Domestic">Domestic</option>
                                                        <option value="International">International</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-3 mt-3">
                                                <div className='form-fields'>
                                                    <label className='form-label' htmlFor="fare_type">FareType</label>
                                                    <input type="text" name='fareType' value={ReportFormData.name} onChange={handleInput} className='form-control' id='fare_type' placeholder='Enter Fare Type' />
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    <div className="report-button-row">
                                        <div className="row">
                                            <div className="col-12 col-md-6">
                                                <button type="submit" className="cm-button">Submit</button>
                                            </div>
                                            <div className="col-12 col-md-6 text-end">
                                                <button type="button" className="cm-button" onClick={handleToggleFields}>
                                                    {showAllFields ? "Show Less" : "View More"}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
            <section className="agent-activity-wrap pb">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="agent-tabs">
                                <ul className="agent-tabs-list">
                                    <li>
                                        <ExcelDownloadBtn tableRef={tableRef} ExcfileName="report.xlsx" />
                                    </li>
                                    <li>
                                        <PdfDownloadBtn tableRef={tableRef} PdffileName="report.pdf" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="user-login-data-wrap booking-report-table">
                            <div ref={tableRef}>
                                <DataTable data={ReportResponseData} columns={columns}
                                    options={{
                                        paging: true,
                                        searching: true,
                                        ordering: false,
                                        responsive: true
                                    }}
                                    className="display">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Booking Id</th>
                                            <th>Departure - Arrival</th>
                                            <th>Booking Date</th>
                                            <th>Card Holder Name</th>
                                            <th>PNR No.</th>
                                            <th>Booking Status</th>
                                            <th>Trip Code - Trip Type - Booking Class</th>
                                            <th>Fare Type - Journey Type - Provider</th>
                                            <th>Adult - Child - Infant</th>
                                            <th>Amount</th>
                                            <th>Departure Date - Arrival Date</th>
                                            <th>CRM Status</th>
                                            <th>CRM Status1</th>
                                            <th>CRM Status2</th>
                                            <th>Device Type - IP Address</th>
                                        </tr>
                                    </thead>
                                </DataTable>
                            </div>
                        </div>
                        {/* Data Counter */}
                    </div>
                </div>
            </section>
        </>
    );
}
