import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const GaussianChart = ({ dataset, mean, standardDeviation, threshold }) => {
  const [gaussianData, setGaussianData] = useState([]);
  const [greenAreaData, setGreenAreaData] = useState([]);
  const [gaussianChart, setGaussianChart] = useState(null);
  const gaussianChartRef = useRef(null);

  
useEffect(() => {
  const updateChart = () => {
    if (!Array.isArray(dataset)) {
      return;
    }

    const sortedData = [...dataset].sort((a, b) => a.ValoreFinale - b.ValoreFinale);

    console.log(sortedData);

    const dataPoints = sortedData.map((item) => ({
      x: item.ValoreFinale, // Usa direttamente il valore di .ValoreFinale
      y: calculateGaussian(item.ValoreFinale),
    }));

    setGaussianData(dataPoints);
    updateGreenAreaData(dataPoints);
  };

    const calculateGaussian = (x) => {
      const exponent = -((x - mean) ** 2) / (2 * standardDeviation ** 2);
      return (1 / (standardDeviation * Math.sqrt(2 * Math.PI))) * Math.exp(exponent);
    };

  

    const updateGreenAreaData = (data) => {
      const newGreenAreaData = data.filter(point => point.x >= mean - threshold && point.x <= mean + threshold);
      setGreenAreaData(newGreenAreaData);
    };

    updateChart();
  }, [dataset, mean, standardDeviation, threshold]);

  useEffect(() => {
    if (gaussianData.length > 0) {
      if (gaussianChart) {
        gaussianChart.data.datasets[0].data = [...gaussianData];
        gaussianChart.data.datasets[1].data = [...greenAreaData];
        gaussianChart.update();
      } else {
        const ctx = gaussianChartRef.current.getContext('2d');
        
        const xValues = gaussianData.map(point => point.x);

        const newGaussianChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: dataset.map(item => item.ValoreFinale), // Utilizza i valori effettivi di .ValoreFinale
            datasets: [
              {
                label: 'Curva di Gauss',
                data: [...gaussianData],
                fill: false,
                borderColor: 'rgba(0, 0, 255, 1)',
                borderWidth: 2,
              },
              {
                label: 'Valori interessati',
                data: [...greenAreaData],
                fill: 'origin',
                backgroundColor: 'rgba(0, 255, 0, 0.6)',
                spanGaps: true,
              },
            ],
          },
          options: {
            layout: {
              padding: {
                top: 20,
                bottom: 40,
              },
            },
            scales: {
              x: {
                type: 'linear',
                position: 'bottom',
              },
              y: {
                ticks: {
                  beginAtZero: true,
                },
              },
            },
          },
        });
        

        setGaussianChart(newGaussianChart);
      }
    }
  }, [gaussianData, greenAreaData, gaussianChart, mean, standardDeviation, threshold]);

  return (
    <div>
      <div className="panecharts">
        <div className='LineChart'>
          <h2>Curva di Gauss</h2>
          <canvas ref={gaussianChartRef} />
        </div>
      </div>
    </div>
  );
};

export default GaussianChart;
