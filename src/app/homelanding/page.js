"use client";
import Link from "next/link";
import React, { useState } from "react";
import * as XLSX from "xlsx"; // For Excel export
import jsPDF from "jspdf"; // For PDF export
import "jspdf-autotable"; // For table in PDF

export default function HomeLandingPage() {
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

  // State for search term
  const [searchTerm, setSearchTerm] = useState("");

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Default rows per page

  // Handle row selection
  const handleRowSelection = (rows) => {
    setRowsPerPage(rows === "All" ? data.length : rows);
    setCurrentPage(1); // Reset to the first page
  };

  // Filtered data based on search term
  const filteredData = data.filter((row) =>
    row.agent.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Excel Export
  const handleExportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "AgentActivity");
    XLSX.writeFile(workbook, "AgentActivity.xlsx");
  };

  // PDF Export
  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.text("Agent Activity", 10, 10);
    doc.autoTable({
      head: [["Agent", "Action", "Time"]],
      body: filteredData.map((row) => [row.agent, row.action, row.time]),
    });
    doc.save("AgentActivity.pdf");
  };

  // Print Functionality
  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    const tableHtml = `
      <table border="1" style="width:100%;border-collapse:collapse;text-align:left;">
        <thead>
          <tr>
            <th>Agent</th>
            <th>Action</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          ${filteredData
            .map(
              (row) =>
                `<tr>
                  <td>${row.agent}</td>
                  <td>${row.action}</td>
                  <td>${row.time}</td>
                </tr>`
            )
            .join("")}
        </tbody>
      </table>
    `;
    printWindow.document.write(`<html><body>${tableHtml}</body></html>`);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <>
      <section className="agent-activity-wrap py">
        <h1 className="text-center mb-lg-5 mb-3 fw-semibold">Agent Activity</h1>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="agent-tabs">
                <ul className="agent-tabs-list">
                  <li>
                    <div className="row-dropdown">
                      <button type="button">Rows</button>
                      <div className="dropdown-list">
                        <ul>
                          <li onClick={() => handleRowSelection(5)}>
                            <button type="button">5 Rows</button>
                          </li>
                          <li onClick={() => handleRowSelection(10)}>
                            <button type="button">10 Rows</button>
                          </li>
                          <li onClick={() => handleRowSelection(25)}>
                            <button type="button">25 Rows</button>
                          </li>
                          <li onClick={() => handleRowSelection("All")}>
                            <button type="button">Show All</button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <button onClick={handleExportExcel}>Excel</button>
                  </li>
                  <li>
                    <button onClick={handleExportPDF}>PDF</button>
                  </li>
                  <li>
                    <button onClick={handlePrint}>Print</button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-6 mt-3 mt-lg-0">
              <div className="searchbar-field d-flex align-items-center justify-content-end">
                <input
                  type="text"
                  placeholder="Search Here..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="user-login-data-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Agent</th>
                    <th>Action</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {currentRows.map((row, index) => (
                    <tr key={index}>
                      <td>{row.agent}</td>
                      <td>{row.action}</td>
                      <td>{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bottom-item d-flex align-items-center justify-content-between">
              <p>
                Showing {currentRows.length} of{" "}
                <span className="all-entry">{filteredData.length}</span> entries
              </p>
              {/* Pagination */}
              <div className="pagination">
                <ul className="pagination-list d-flex align-items-center gap-3">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (pageNumber) => (
                      <li
                        key={pageNumber}
                        className={`pagination-item ${
                          currentPage === pageNumber ? "active" : ""
                        }`}
                        onClick={() => paginate(pageNumber)}
                      >
                        {pageNumber}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
