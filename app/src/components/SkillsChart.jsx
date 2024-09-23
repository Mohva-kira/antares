import React from 'react';
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SkillsChart = ({ skills }) => {
  const data = {
    labels: skills.map(skill => skill.name),
    datasets: [{
      label: 'Compétences',
      data: skills.map(skill => skill.level),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.label + ': ' + tooltipItem.raw + '%';
          }
        }
      }
    }
  };

  return (
    <div className="widget border rounded-2xl bg-white p-4 shadow-md">
      <h3 className="text-lg font-bold mb-2">Graphiques de Compétences</h3>
      <div className="h-60">
        <Chart type="bar" data={data} options={options} />
      </div>
    </div>
  );
};

export default SkillsChart;
