import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register required Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler 
);

export default function GradientLineChart() {
    // Data
    const data = {
        labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
            {
                label:'',
                data: [20, 30, 40, 35, 50, 65, 70, 80, 90, 85, 75, 60],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: (context) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
                    gradient.addColorStop(0, 'rgba(75, 192, 192, 0.5)');
                    gradient.addColorStop(1, 'rgba(75, 192, 192, 0)');
                    return gradient;
                },
                fill: true,
                tension: 0.4, 
            },
            {
                label: '',
                data: [10, 20, 30, 25, 35, 55, 60, 75, 85, 80, 70, 50],
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: (context) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
                    gradient.addColorStop(0, 'rgba(153, 102, 255, 0.5)');
                    gradient.addColorStop(1, 'rgba(153, 102, 255, 0)');
                    return gradient;
                },
                fill: true,
                tension: 0.4,
            },
        ],
    };

    // Options
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            display: false,
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            callbacks: {
              label: (context) => `${context.dataset.label}: ${context.raw}`,
            },
          },
          title: {
            display: false,
            text: '',
          },
        },
        scales: {
          x: {
            grid: {
              drawOnChartArea: true,
              borderDash: [5, 5],
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              drawOnChartArea: false,
              borderDash: [5, 5],
            },
          },
        },
        interaction: {
          mode: 'index',
          intersect: false,
        },
      };

    return <Line data={data} options={options} />;
}
