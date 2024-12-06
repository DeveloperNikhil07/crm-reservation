'use client';
import DashBoardSlider from '../components/dashboardSlider/DashBoardSlider';
import ChartGraph from '../components/chartGraph/LineChart';
import BarGraph from "../components/barGraph/BarGraph";
import DonutChart from "../components/donoutChart/DonoutChartGraph";
import { useState,useEffect } from 'react';
export default function Dashboard() {
    return (
        <>
            <section className="dashboard-wrapper bg-gray pt-4 pb-0 pb-md-3 overflow-hidden">
                <div className="container">
                    <div className="dashboard-card-row">
                        <DashBoardSlider />
                    </div>
                </div>
            </section>
            <section className="chart-wrapper bg-gray pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 mt-3 mt-md-0">
                            <div className="chart-graph-box text-center">
                                <div className="chart-header justify-content-center gap-2 gap-sm-0 d-flex flex-wrap align-items-center justify-content-sm-between mb-3">
                                    <h3 className="fw-semibold">Payments Overview</h3>
                                    <div className="filter-box d-flex align-items-center gap-2">
                                        <p>Short by:</p>
                                        <div className="option-dropdown">
                                            <button className="btn cm-button mt-0 " type="button">
                                                Monthly
                                            </button>
                                            <ul className="options">
                                                <li className="text-center">Yearly</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <ChartGraph />
                                <div className="amount-row d-flex flex-wrap justify-content-center mt-3">
                                    <div className="text-center recived-amount">
                                        <p>Received Amount</p>
                                        <h2 className="fs-5 fw-semibold">$45,070.00</h2>
                                    </div>
                                    <div className="text-center due-amount">
                                        <p>Due Amount</p>
                                        <h2 className="fs-5 fw-semibold">$32,400.00</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mt-3 mt-md-0">
                            <div className="chart-graph-box text-center">
                                <div className="chart-header justify-content-center gap-2 gap-sm-0 d-flex flex-wrap align-items-center justify-content-sm-between mb-3">
                                    <h3 className="fw-semibold">Profit this week</h3>
                                    <div className="filter-box d-flex align-items-center gap-2">
                                        <p>Short by:</p>
                                        <div className="option-dropdown">
                                            <button className="btn cm-button mt-0 " type="button">
                                                This Week
                                            </button>
                                            <ul className="options">
                                                <li className="text-center">Last Week</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <BarGraph />
                                <div className="amount-row d-flex flex-wrap justify-content-center mt-3">
                                    <div className="text-center recived-amount">
                                        <p>Received Amount</p>
                                        <h2 className="fs-5 fw-semibold">$4,500</h2>
                                    </div>
                                    <div className="text-center due-amount">
                                        <p>Due Amount</p>
                                        <h2 className="fs-5 fw-semibold">$3,240</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 mt-4">
                            <div className="chart-graph-box">
                                <div className="chart-header justify-content-center gap-2 gap-sm-0 d-flex flex-wrap align-items-center justify-content-sm-between mb-3">
                                    <h3 className="fw-semibold">Used Devices</h3>
                                    <div className="filter-box d-flex align-items-center gap-2">
                                        <p>Short by:</p>
                                        <div className="option-dropdown">
                                            <button className="btn cm-button mt-0 " type="button">
                                                Monthly
                                            </button>
                                            <ul className="options">
                                                <li className="text-center">Yearly</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <DonutChart />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mt-4">
                            <div className="chart-graph-box">
                                <div className="chart-header justify-content-center gap-2 gap-sm-0 d-flex flex-wrap align-items-center justify-content-sm-between mb-3">
                                    <h3 className="fw-semibold">Login Activity</h3>
                                </div>
                                <div className="user-login-row d-flex align-items-center justify-content-between">
                                    <div className="user-profile d-flex align-items-center">
                                        <i className="fa-solid fa-user online"></i>
                                        <div className="user-name">
                                            <h5>John Doe</h5>
                                            <p>Co-Founder</p>
                                        </div>
                                    </div>
                                    <div className="user-status">
                                        <p className='online'>Online</p>
                                    </div>
                                </div>
                                {/* Ofline Row */}
                                <div className="user-login-row d-flex align-items-center justify-content-between">
                                    <div className="user-profile d-flex align-items-center">
                                        <i className="fa-solid fa-user ofline"></i>
                                        <div className="user-name">
                                            <h5>John Doe</h5>
                                            <p>Co-Founder</p>
                                        </div>
                                    </div>
                                    <div className="user-status">
                                        <p className='ofline'>Ofline</p>
                                    </div>
                                </div>
                                {/* Online row */}
                                <div className="user-login-row d-flex align-items-center justify-content-between">
                                    <div className="user-profile d-flex align-items-center">
                                        <i className="fa-solid fa-user online"></i>
                                        <div className="user-name">
                                            <h5>John Doe</h5>
                                            <p>Co-Founder</p>
                                        </div>
                                    </div>
                                    <div className="user-status">
                                        <p className='online'>Online</p>
                                    </div>
                                </div>
                                {/* Sleep Mode */}
                                <div className="user-login-row d-flex align-items-center justify-content-between">
                                    <div className="user-profile d-flex align-items-center">
                                        <i className="fa-solid fa-user sleep-mode"></i>
                                        <div className="user-name">
                                            <h5>John Doe</h5>
                                            <p>Co-Founder</p>
                                        </div>
                                    </div>
                                    <div className="user-status">
                                        <p className='sleep-mode'>Break</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flight-booking-list bg-gray pb">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="chart-graph-box">
                                <div className="chart-header text-center text-md-start mb-3">
                                    <h3 className="fw-semibold">Today's Flight Booking</h3>
                                    <p>Overview of latest month</p>
                                </div>
                                <div className="recent-flight-wrapper">
                                    <div className="flight-listing-card">
                                        <div className="flight-list-header">
                                            <ul className='d-flex align-items-center justify-content-between'>
                                                <li><i className="fa-solid fa-user"></i> Members</li>
                                                <li><i className="fa-solid fa-plane"></i> Flight</li>
                                                <li><i className="fa-solid fa-users"></i> Total Members</li>
                                                <li><i className="fa-solid fa-ticket"></i> Ticket Price</li>
                                            </ul>
                                        </div>
                                        <div className="flight-listing-data">
                                            <ul className='d-flex align-items-center justify-content-between'>
                                                <li className='d-flex align-items-center'>
                                                    <div className="client-profile">
                                                        <i className="fa-solid fa-user"></i>
                                                    </div>
                                                    <div className="client-info">
                                                        <h5>John Doe</h5>
                                                        <p className='client-mail'>john@gmail.com</p>
                                                    </div>
                                                </li>
                                                <li>Qatar</li>
                                                <li><div className="member">5</div></li>
                                                <li>$56k</li>
                                            </ul>
                                            <ul className='d-flex align-items-center justify-content-between'>
                                                <li className='d-flex align-items-center'>
                                                    <div className="client-profile">
                                                        <i className="fa-solid fa-user"></i>
                                                    </div>
                                                    <div className="client-info">
                                                        <h5>John Doe</h5>
                                                        <p className='client-mail'>john@gmail.com</p>
                                                    </div>
                                                </li>
                                                <li>Emirates</li>
                                                <li><div className="member">2</div></li>
                                                <li>$106k</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
