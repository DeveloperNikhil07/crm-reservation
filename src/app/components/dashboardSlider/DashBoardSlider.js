'use client';
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { DashboardCardSliderApi } from '../../api/dashboardApi/dashbaordsliderApi';

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function DashBoardSlider() {
    const [loading, setLoading] = useState(true);
    const [confirmData, setConfirmData] = useState([]);
    const [failedData, setFailedData] = useState([]);
    const [cancelledData, setCancelledData] = useState([]);
    const [ticketedData, setTicketedData] = useState([]);
    const [incompleteReport, setIncompleteReport] = useState([]);
    const [activeUser, setActiveUser] = useState([]);
    // Fetch data from the API for Slider 
    const fetchDashboardData = async () => {
        try {
            const response = await DashboardCardSliderApi();
            setConfirmData(response.data || []);
            setFailedData(response.data || []);
            setCancelledData(response.data || []);
            setTicketedData(response.data || []);
            setIncompleteReport(response.data || []);
            setActiveUser(response.data || []);
            console.log(response);
        } catch (err) {
            console.error("Error fetching dashboard data:", err);
        } finally {
            setLoading(false); // Stop loading once the data is fetched
        }
    };
    useEffect(() => {
        fetchDashboardData();
    }, []);
    // End
    // Slider
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 767,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <>
            <Slider {...settings}>
                <div className="col-12 col-md-4">
                    <Link href="/reports/flight-report?status=Confirmed">
                        <div className="dashboard-card">
                            <div className="icon confirm-booking-bg">
                                <i className="fa-solid fa-check"></i>
                            </div>
                            <div className="card-body">
                                <div className="card-content">
                                    {loading ? <p className="text-center">Loading...</p> : <h2>{confirmData.confirmed}</h2>}
                                    <p>Total Confirmed Booking</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-12 col-md-4">
                    <Link href="/reports/flight-report?status=Ticketed">
                        <div className="dashboard-card">
                            <div className="icon total-ticketed-bg">
                                <i className="fa-solid fa-ticket"></i>
                            </div>
                            <div className="card-body">
                                <div className="card-content">
                                    {loading ? <p className="text-center">Loading...</p> : <h2>{ticketedData.ticketed}</h2>}
                                    <p>Total Ticketed</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-12 col-md-4">
                    <Link href="/reports/flight-report?status=Failed">
                        <div className="dashboard-card">
                            <div className="icon failed-bg">
                                <i className="fa-solid fa-circle-exclamation"></i>
                            </div>
                            <div className="card-body">
                                <div className="card-content">
                                    {loading ? <p className="text-center">Loading...</p> : <h2>{failedData.failed}</h2>}
                                    <p>Total Booking Failed</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-12 col-md-4">
                    <Link href="/reports/flight-report?status=Cancelled">
                        <div className="dashboard-card">
                            <div className="icon total-ticketed-bg">
                                <i className="fa-solid fa-ban"></i>
                            </div>
                            <div className="card-body">
                                <div className="card-content">
                                    {loading ? <p className="text-center">Loading...</p> : <h2>{cancelledData.cancelled}</h2>}
                                    <p>Total Booking Cancelled</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-12 col-md-4">
                    <Link href="/reports/flight-report?status=Incompleted">
                        <div className="dashboard-card">
                            <div className="icon incomplete-ticket-bg">
                                <i className="fa-solid fa-ticket"></i>
                            </div>
                            <div className="card-body">
                                <div className="card-content">
                                    {loading ? <p className="text-center">Loading...</p> : <h2>{incompleteReport.incompleted}</h2>}
                                    <p>Total Incomplete Tickets</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Example of additional static cards */}
                <div className="col-12 col-md-4">
                    <div className="dashboard-card">
                        <div className="icon total-user-bg">
                            <i className="fa-solid fa-users"></i>
                        </div>
                        <div className="card-body">
                            <div className="card-content">
                                {loading ? <p className="text-center">Loading...</p> : <h2>{activeUser.activeUsers}</h2>}
                                <p>Total Active Users</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="dashboard-card">
                        <div className="icon total-profit-bg">
                            <i className="fa-solid fa-dollar-sign"></i>
                        </div>
                        <div className="card-body">
                            <div className="card-content">
                                <h2>$ 42.2K</h2>
                                <p>Total Profit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </>
    );
}
