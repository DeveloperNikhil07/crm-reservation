"use client";
import React from 'react';
import * as XLSX from 'xlsx';

export default function ExcelDownloadBtn({ tableRef, ExcfileName = 'report.xlsx' }) {
    const handleExcelExport = () => {
        if (tableRef?.current) {
            const ws = XLSX.utils.table_to_sheet(tableRef.current);
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
            XLSX.writeFile(wb, ExcfileName);
        } else {
            console.error('Table not found or reference is missing');
        }
    };

    return (
        <button onClick={handleExcelExport}>Download Excel</button>
    );
}