import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const labels = [12, 19, 3, 5, 2, 3,2, 19, 3, 5, 2, 3,2];
  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      const gradient = ctx.createLinearGradient(1, 0, 0, chartRef.current.height);
      gradient.addColorStop(0, 'green');
      gradient.addColorStop(1, 'black');
      // Destroy existing chart instance, if any
      chartInstanceRef.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels ,
          datasets: [{
            label: '# of Votes',
            data: [2, 19, 3, 5, 2, 3,2, 19, 3, 5, 2, 3,2, 19, 3, 5, 2, 3,2, 19, 3, 5, 2, 3,2, 19, 3, 5, 2, 3,2, 19, 3, 5, 2, 3,6,4,3,5,3,6,3,6,3,6,3,6,4,5,],
            borderWidth: 1,
            fill: true,
            backgroundColor: gradient , // Color for the fill
            borderColor: 'green', // Border color
            hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
      
            hoverBorderColor: 'rgba(255, 99, 132, 1)',
            tension: 0.2,
            pointStyle:false
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
      
    }

    // Cleanup function
    return () => {
      // Destroy chart instance when component unmounts
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []); 

  return (
    <div>
      <canvas ref={chartRef} id="myChart"></canvas>
    </div>
  );
};

export default BarChart;
