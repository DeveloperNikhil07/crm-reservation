import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register required Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function BarGraph() {
    const data = {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'], // Days of the week
        datasets: [
            {
                label: 'Sales',
                data: [20, 30, 40, 35, 50, 65, 70, 80, 90, 85, 75, 60],
                backgroundColor: 'rgba(153, 102, 255, 0.8)', 
                borderColor: 'rgba(153, 102, 255, 1)', 
                borderWidth: 1,
                borderDash: [5, 5], 
                borderRadius: 4,
                barThickness: 25,
            },
            {   
                label: 'Revenue',
                data: [20, 30, 40, 35, 50, 65, 70, 80, 90, 85, 75, 60],
                backgroundColor: 'rgba(75, 192, 192, 0.8)', 
                borderColor: 'rgba(75, 192, 192, 1)', 
                borderWidth: 1, 
                borderDash: [5, 5], 
                borderRadius: 4,
                barThickness: 25,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top', // Position of the legend
                display: false,
            },
            title: {
                display: false,
                text: 'Profit this week',
            },
        },
        scales: {
            x: {
                stacked: true, // Stack bars on X-axis
                grid: {
                    drawOnChartArea: false, // Optional: remove gridlines on X-axis
                },
            },
            y: {
                stacked: true, // Stack bars on Y-axis
                beginAtZero: true,
            },
        },
    };

    return (
        <div className='bar-graph-item'>
            {/* @ts-ignore */}
            <Bar data={data} options={options} />
        </div>
    );
}
