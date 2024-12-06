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

export default function FlightReports() {

    const tableRef = useRef(null);
    const [loading, setLoading] = useState(true); // Loading state
    const [showAllFields, setShowAllFields] = useState(false); // Toggle between limited and all fields
    const [affiliate, setAffiliate] = useState([]);
    const [bookingStatus, setBookingStatus] = useState([])
    const [provider, setProvider] = useState([]);
    const [bookingClass, setBookingClass] = useState([])
    const ApiUrl = "http://192.168.0.151:818/api/Reports/GetFlightBookingReports";
    const [flightreportdata, setDataTablefromapi] = useState([]);

    const [statusfromdash, setstatusfromdash] = useState("");
    const [failedStatus, setFailedStatus] = useState("");
    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const statusconfirm = queryParams.get('status');
        const failedstatus = queryParams.get('failedStatus');

        if (statusconfirm) {
            setstatusfromdash(statusconfirm);
        }
        if (failedstatus) {
            setFailedStatus(failedstatus);
        }
        fetchAllData();

    }, []);

    const fetchData = async (formData, setData) => {
        try {
            const response = await fetch(ApiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Cache-Control": "no-cache",
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            setData(data.data?.flight_Booking_Report_Details || []);
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    };

    const fetchAllData = async () => {
        const requests = [
            fetchData({
                bookingStatus: "Confirmed",
                requestDateFrom: "10/21/2024",
                pageSize: 1000,
                pageNumber: 1,
                tenantId: 0
            }, setDataTablefromapi),
        ];

        await Promise.all(requests);
        setLoading(false); // Set loading to false only when all requests are completed
    };





    // Fetch API data on mount
    const getCurrentDate = () => {
        const today = new Date();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const year = today.getFullYear();
        return `${month}/${day}/${year}`;
    };

    // Api Fetch data
    const [formData, setFormData] = useState({
        requestDateFrom: getCurrentDate(),//"10/21/2024",
        requestDateto: getCurrentDate(), //"11/21/2024",
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
        pageSize: 100,
        pageNumber: 1,
        tenantId: 0
    });

    const FetchApi = async () => {
        try {
            const response = await fetch(ApiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Cache-Control": "no-cache",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to fetch booking data");
            }

            const dataResponse = await response.json();
            if (dataResponse?.data) {
                // Set the data you want to use in the SearchBar
                setDataTablefromapi(dataResponse.data.flight_Booking_Report_Details || []);
                setAffiliate(dataResponse.data.affiliate || [])
                setBookingClass(dataResponse.data.bookingClass || [])
                setBookingStatus(dataResponse.data.bookingStatus || [])
                setProvider(dataResponse.data.provider || [])
                console.log(dataResponse)
            }
            // console.log(dataResponse.data.flight_Booking_Report_Details)
        } catch (error) {
            console.error('Error fetching API:', error);
            setLoading(false);
        }
    };
    useEffect(() => {
        FetchApi();
    }, []);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!formData.affiliate && !formData.requestDateFrom && !formData.requestDateto && !formData.bookingReference && !formData.gdsPnr && !formData.bookingStatus && !formData.email && !formData.mobileNo && !formData.bookingClass && !formData.bookingAmount && !formData.tripType && !formData.ticketingCareer && !formData.travelDate && !formData.provider && !formData.device && !formData.journeyType && !formData.fareType) {
            alert("Atleast One Field Required...");
        }
        else {
            FetchApi();
            alert("succeffull");
        }
        console.log(formData)
    };

    // Handle toggle of "View More / View Less"
    const handleToggleFields = () => {
        setShowAllFields(prev => !prev);
    };
    // Form Input
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'mobileNo' || name === 'bookingAmount') {
            const numericValue = value.replace(/\D/g, '');
            if (numericValue.length <= 10) {
                setFormData((prevData) => ({
                    ...prevData,
                    [name]: numericValue,
                }));
            }
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };
    const handleDateChange = (name, date) => {
        if (date) {
            const formattedDate = date.toLocaleDateString('en-US'); // Format: MM/dd/yyyy
            setFormData({
                ...formData,
                [name]: formattedDate,
            });
        } else {
            setFormData({
                ...formData,
                [name]: '',
            });
        }
    };
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
    ]

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
                                <form action="" method='post' className="row" onSubmit={handleFormSubmit}>
                                    <div className="col-12 col-md-3">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="select_affiliate">Affiliate</label>
                                            <select name="affiliate" value={formData.affiliate || "0"}
                                                id="select_affiliate" onChange={handleInputChange} className="form-control">
                                                <option value="0">-- Select Affiliate --</option>
                                                {affiliate.map((affiliateItem, index) => (
                                                    <option key={index} value={affiliateItem}>
                                                        {affiliateItem}
                                                    </option>
                                                ))}
                                            </select>

                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3 mt-md-0">
                                        <div className='form-fields'>
                                            <SearchFromDate
                                                label="Booking From Date"
                                                value={formData.requestDateFrom}
                                                onChange={(date) => handleDateChange('requestDateFrom', date)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3 mt-md-0">
                                        <div className='form-fields'>
                                            <SearchToDate
                                                label="Booking To Date"
                                                value={formData.requestDateto}
                                                onChange={(date) => handleDateChange('requestDateto', date)} />

                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3 mt-md-0">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="booking_refer">Booking Reference</label>
                                            <input type="text" name='bookingReference' value={formData.name} onChange={handleInputChange} className='form-control' id='booking_refer' placeholder='Enter Booking Reference' />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="booking_pnr">Booking PNR</label>
                                            <input type="text" name='gdsPnr' value={formData.name} onChange={handleInputChange} className='form-control' id='booking_pnr' placeholder='Enter Booking PNR' />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="booking_status">Booking Status</label>
                                            <select name="bookingStatus" value={formData.name || "0"} onChange={handleInputChange} id="booking_status" className='form-control'>
                                                <option value="0">-- Select Status --</option>
                                                {bookingStatus.map((bookingStatus, index) => (
                                                    <option value={bookingStatus} key={index}>
                                                        {bookingStatus}
                                                    </option>
                                                ))};
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="email">Email</label>
                                            <input type="email" name='email' value={formData.name} onChange={handleInputChange} className='form-control' id='email' placeholder='Enter Email' />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3">
                                        <div className='form-fields'>
                                            <label className='form-label' htmlFor="phone">Phone Number</label>
                                            <input
                                                type="text"
                                                name="mobileNo"
                                                value={formData.mobileNo || ""} // Corrected to 'mobileNo'
                                                onChange={handleInputChange}
                                                className='form-control'
                                                id='phone'
                                                placeholder='Enter Phone Number'
                                            />
                                        </div>
                                    </div>

                                    {/* Show remaining fields if 'showAllFields' is true */}
                                    {showAllFields && (
                                        <>
                                            <div className="col-12 col-md-3 mt-3">
                                                <div className='form-fields'>
                                                    <label className='form-label' htmlFor="booking_class">Booking Class</label>
                                                    <select name="bookingClass" value={formData.name || "0"} onChange={handleInputChange} id="booking_class" className='form-control'>
                                                        <option value="0">-- Select Option --</option>
                                                        {bookingClass.map((bookingClass, index) => (
                                                            <option value={bookingClass} key={index}>{bookingClass}</option>
                                                        ))};
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-3 mt-3">
                                                <div className='form-fields'>
                                                    <label className='form-label' htmlFor="booking_amount">Booking Amount</label>
                                                    <input type="text" name='bookingAmount' value={formData.bookingAmount || ""} onChange={handleInputChange} className='form-control' id='booking_amount' placeholder='Enter Amount' />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-3 mt-3">
                                                <div className='form-fields'>


                                                    <label className='form-label' htmlFor="trip_type">Trip Type</label>
                                                    <select name="tripType" value={formData.name || "0"} onChange={handleInputChange} id="trip_type" className='form-control'>
                                                        <option value="0">-- Select Way --</option>
                                                        <option value="oneway">One Way</option>
                                                        <option value="roundway">Round Way</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-3 mt-3">
                                                <div className='form-fields'>
                                                    <label className='form-label' htmlFor="ticketing_carrier">Ticketing Carrier Code</label>
                                                    <input type="text" name='ticketingCareer' value={formData.name} onChange={handleInputChange} className='form-control' id='ticketing_carrier' placeholder='Enter Carrier Code' />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-3 mt-3">
                                                <div className='form-fields'>
                                                    <label className='form-label' htmlFor="travel_date">Travel Date</label>
                                                    <DatePicker
                                                        selected={formData.travelDate}
                                                        onChange={(date) => handleTravelDate('travelDate', date)}  // Pass the date to the handler
                                                        dateFormat="MM/dd/yyyy"
                                                        className="form-control"
                                                        placeholderText="Select Date"
                                                        name="travelDate"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-3 mt-3">
                                                <div className='form-fields'>
                                                    <label className='form-label' htmlFor="provider">Provider</label>
                                                    <select name="provider" value={formData.name || "0"} onChange={handleInputChange} id="provider" className='form-control'>
                                                        <option value="0"> -- Select --</option>
                                                        {provider.map((provider, index) => (
                                                            <option value={provider} key={index}>{provider}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-3 mt-3">
                                                <div className='form-fields'>
                                                    <label className='form-label' htmlFor="device">Device</label>
                                                    <select name="device" value={formData.name} onChange={handleInputChange} id="device" className='form-control'>
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
                                                    <select name="journeyType" value={formData.name} onChange={handleInputChange} id="journey_type" className='form-control'>
                                                        <option value=""> -- Select type --</option>
                                                        <option value="Domestic">Domestic</option>
                                                        <option value="International">International</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-3 mt-3">
                                                <div className='form-fields'>
                                                    <label className='form-label' htmlFor="fare_type">FareType</label>
                                                    <input type="text" name='fareType' value={formData.name} onChange={handleInputChange} className='form-control' id='fare_type' placeholder='Enter Fare Type' />
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
                </div>
            </section>
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
                                <DataTable data={flightreportdata} columns={columns}
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
