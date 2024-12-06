"use client";
import SearchFromDate from "../../components/searchFromDate/SearchFromDate";
import SearchToDate from "../../components/searchToDate/SearchToDate";

export default function FlightReportHistory() {
    return (
        <>
            <section className="manage-vacation-wrapp leadbooking-flight pb bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title text-center py">
                                <h1>Flight Report History</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-wrapper">
                                <form action="" method='post' className="row justify-content-center">
                                    <div className="col-12 col-md-3 mt-3">
                                        <div className="form-fields">
                                            <SearchFromDate label="From Date"/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mt-3">
                                        <div className="form-fields">
                                            <SearchToDate label="To Date"/>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <button type="submit" className="cm-button">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="flight-report-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Total No of Search</th>
                                        <th>Total No of Bookings</th>
                                        <th>Total No of Hits on Payment</th>
                                        <th>Total No of Hits From Other Affiliate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <a href="#">More</a>
                                                <a href="#">0</a>
                                            </div>
                                        </td>
                                        <td>
                                        <div className="d-flex align-items-center justify-content-between">
                                                <a href="#">More</a>
                                                <a href="#">0</a>
                                            </div>
                                        </td>
                                        <td>
                                        <div className="d-flex align-items-center justify-content-between">
                                                <a href="#">More</a>
                                                <a href="#">0</a>
                                            </div>
                                        </td>
                                        <td>
                                        <div className="d-flex align-items-center justify-content-between">
                                                <a href="#">More</a>
                                                <a href="#">0</a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
