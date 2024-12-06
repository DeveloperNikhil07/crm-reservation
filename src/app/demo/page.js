"use client";

import React, { useState, useEffect, useRef } from "react";
import { demoApi } from "../api/manageApi";
import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import PdfDownloadBtn from '../components/ExcelDownloadBtn/ExcDownload';
import ExcelDownloadBtn from '../components/PdfDownloadBtn/PdfDownloadBtn';
DataTable.use(DT);

export default function Page() {
    const tableRef = useRef(null);
    const [demoData, setDemoData] = useState([]);

    // Function to fetch API data
    const fetchDemoApi = async () => {
        try {
            const resdata = await demoApi();
            setDemoData(resdata.todos || []);
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    };

    useEffect(() => {
        console.log("Updated Data:", demoData);
    }, [demoData]);

    useEffect(() => {
        fetchDemoApi();
    }, []);

    // Table columns definition
    const columns = [
        { title: "ID", data: null, render: (data, type, row, meta) => meta.row + 1 },
        { title: "User ID", data: "userId" },
        { title: "Todo", data: "todo" },
        {
            title: "Completed",
            data: "completed",
            render: (data) => (data ? "Yes" : "No"),
        },
    ];
    return (
        <section className="manage-vacation-wrapp leadbooking-flight pb bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center py">
                            <h1>Demo</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-6">
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
                <div className="row">
                    <div className="col-12">
                        <table ref={tableRef} className="wrap">
                            <DataTable
                                data={demoData}
                                columns={columns}
                                options={{
                                    paging: true,
                                    searching: true,
                                    ordering: true,
                                    responsive: true,
                                }}
                                className="display"
                            />
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}
