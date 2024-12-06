"use client";
import React from "react";

const TableDataRowController = ({ onRowsChange, tableData }) => {
    const handleRowsChange = (tableRow) => {
        onRowsChange(tableRow);
    };

    return (
        <div className="row-dropdown">
            <button type="button">Select Rows</button>
            <div className="dropdown-list">
                <ul>
                    <li><button type="button" onClick={() => handleRowsChange(5)}>5 Rows</button></li>
                    <li><button type="button" onClick={() => handleRowsChange(10)}>10 Rows</button></li>
                    <li><button type="button" onClick={() => handleRowsChange(15)}>15 Rows</button></li>
                    <li><button type="button" onClick={() => handleRowsChange("all")}>Show All</button></li>
                </ul>
            </div>
        </div>
    );
};

export default TableDataRowController;
