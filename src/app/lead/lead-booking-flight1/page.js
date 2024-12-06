"use client";
import { useEffect, useState } from 'react';
import React, { useRef } from 'react';
import "jspdf-autotable";
import SearchFromDate from '../../components/searchFromDate/SearchFromDate'
import SearchToDate from '../../components/searchToDate/SearchToDate';
import PdfDownloadBtn from '../../components/PdfDownloadBtn/PdfDownloadBtn';
import ExcelDownloadBtn from '../../components/ExcelDownloadBtn/ExcelDownloadBtn';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
import { leadReportApi } from '../../api/leadsApi/leadReportApi';

DataTable.use(DT);
export default function LeadBookingFlight() {

    const tableRef = useRef(null);
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
        tenantId: 0,
    });
    // State for storing the lead booking data
    const [leadBookingData, setLeadBookingData] = useState([]);
    const [loading, setLoading] = useState(false); // To manage loading state
    const [error, setError] = useState(null); // To handle errors

    // API call for fetching lead booking data
    const leadBookingApi = async () => {
        setLoading(true);
        setError(null); // Reset any previous errors
        try {
            const LeadResponse = await leadReportApi(leadBookingReport); // Assuming leadReportApi is the API function
            setLeadBookingData(LeadResponse.data); // Use the correct data from the response
            console.log("API Response:", LeadResponse); // Log the response for debugging
        } catch (err) {
            console.error("Error fetching report:", err);
            setError("Failed to fetch lead booking data.");
        } finally {
            setLoading(false);
        }
    };

    // Form submit handler
    const LeadSubmitHandle = (e) => {
        e.preventDefault();
        console.log("Form submitted with report data:", leadBookingReport);
        leadBookingApi();
    };

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

    // Fetch data on component mount
    useEffect(() => {
        leadBookingApi();
    }, []);
    // Form End

    const columns = [
        { title: "Reference No", data: "bookingRef" },
        { title: "Call Type", data: "callType" },
        { title: "Caller Name", data: "callerName" },
        { title: "Caller Email", data: "callerEmail" },
        { title: "Phone Number", data: "phoneNumber" },
        { title: "Query Type", data: "queryType" },
        { title: "Lead Status", data: "leadStatus" },
        { title: "Created By", data: "createdBy" },
        { title: "Remark", data: "remark" },
        { title: "Lead Date", data: "leadDate" },
        { title: "Booking Currency", data: "bookingCurrency" },
        { title: "Currency Rate", data: "currencyRate" },
        { title: "Base Fare", data: "tBasefare" },
        { title: "Action", data: "action" },
    ];

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
                                        <ExcelDownloadBtn tableRef={tableRef} fileName="booking-lead-report.xlsx" />
                                    </li>
                                    <li>
                                        <PdfDownloadBtn tableRef={tableRef} fileName="booking-lead-report.pdf" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="user-login-data-wrap lead-flight-booking-table booking-report-table">
                            <div ref={tableRef}>
                                <DataTable data={leadBookingData} columns={columns}
                                    options={{
                                        paging: true,
                                        searching: true,
                                        ordering: false,
                                        responsive: true
                                    }}
                                    className="display">
                                    {/* <thead>
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
                                    </thead> */}
                                    <thead></thead>
                                </DataTable>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
