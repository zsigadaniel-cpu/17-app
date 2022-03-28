import { Chart } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

const useChart = (chartType, data) => {
  <Chart
    type={chartType}
    width={500}
    height={300}
    options={{
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    }}
    data={data}
  />;
};
