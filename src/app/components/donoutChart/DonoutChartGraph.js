import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function DonutChart() {
  const data = {
    labels: ['Desktop', 'Mobile', 'Tablet', 'Unknown'],
    datasets: [
      {
        data: [65, 45, 34, 12], // Percentages or counts
        backgroundColor: [
          'rgba(54, 162, 235, 1)', // Blue
          'rgba(75, 192, 192, 1)', // Teal
          'rgba(153, 102, 255, 1)', // Purple
          'rgba(201, 203, 207, 1)', // Light Gray
        ],
        hoverBackgroundColor: [
          'rgba(54, 162, 235, 0.8)', // Lighter Blue
          'rgba(75, 192, 192, 0.8)', // Lighter Teal
          'rgba(153, 102, 255, 0.8)', // Lighter Purple
          'rgba(201, 203, 207, 0.8)', // Lighter Gray
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: '70%', // Makes it a donut chart
    plugins: {
      tooltip: {
        callbacks: {
          // @ts-ignore
          label: (tooltipItem) => {
            const label = tooltipItem.label || '';
            const value = tooltipItem.raw;
            return `${label}: ${value}%`;
          },
        },
      },
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true, // Adds circle icons to the legend
          boxWidth: 8,
        },
      },
    },
  };

  return (
    <div className='donout-item position-relative mx-auto'>
       {/* @ts-ignore */}
      <Doughnut data={data} options={options} />
      <div className='visitors-content'>
        <h2>Visitors</h2>
        <p>167</p>
      </div>
    </div>
  );
}
