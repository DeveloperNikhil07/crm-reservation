import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default function PdfDownloadBtn({ tableRef, PdffileName = 'report.pdf' }) {
    const handlePdfExport = () => {
        if (tableRef?.current) {
            const doc = new jsPDF({
                orientation: 'landscape',
                unit: 'pt',
                format: 'A4',
            });

            const title = "Booking Report";
            doc.setFontSize(16);
            doc.text(title, 40, 30);

            // Extract table headers and data manually
            const tableElement = tableRef.current;
            const headers = [];
            const rows = [];

            // Extract headers
            const headerCells = tableElement.querySelectorAll('thead th');
            headerCells.forEach((th) => {
                headers.push(th.innerText);
            });

            // Extract rows (assuming the table body is in <tbody>)
            const rowElements = tableElement.querySelectorAll('tbody tr');
            rowElements.forEach((tr) => {
                const row = [];
                const cells = tr.querySelectorAll('td');
                cells.forEach((td) => {
                    row.push(td.innerText);
                });
                rows.push(row);
            });

            // Generate the PDF table
            doc.autoTable({
                head: [headers], // Headers array
                body: rows, // Rows array
                startY: 50,
                styles: {
                    fontSize: 7, 
                    fontWeight: 300,
                    cellPadding: 4,
                    overflow: 'linebreak', // Allows word breaking
                },
                columnStyles: {
                    0: { minCellWidth: 5 },
                    1: { minCellWidth: 60 },
                    2: { minCellWidth: 50 },
                    3: { minCellWidth: 50 },
                    4: { minCellWidth: 50 },
                    5: { minCellWidth: 40 },
                    6: { minCellWidth: 45 },
                    7: { minCellWidth: 65 },
                    8: { minCellWidth: 65 },
                    9: { minCellWidth: 50 },
                    10: { minCellWidth: 40 },
                    11: { minCellWidth: 60 },
                    12: { minCellWidth: 50 },
                    13: { minCellWidth: 50 },
                    14: { minCellWidth: 50 },
                    15: { minCellWidth: 50 },
                },
                theme: 'grid',
                headStyles: {
                    fillColor: [236, 116, 1],
                    textColor: 255,
                    fontSize: 8,
                },
                alternateRowStyles: {
                    fillColor: [240, 240, 240],
                },
                margin: { left: 10, right: 10 },
                tableWidth: 'auto',
                didDrawPage: (data) => {
                    const pageCount = doc.internal.getNumberOfPages();
                    doc.setFontSize(7);
                    doc.text(`Page ${data.pageNumber} of ${pageCount}`, data.settings.margin.left, doc.internal.pageSize.height - 10);
                },
                pageBreak: 'auto',
            });

            // Save the PDF
            doc.save(PdffileName);
        } else {
            console.error('Table not found or reference is missing');
        }
    };

    return <button onClick={handlePdfExport}>Download PDF</button>;
}
