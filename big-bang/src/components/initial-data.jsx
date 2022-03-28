import { Chart } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

export const Charter = ({ chartType, data }) => (
  <Chart
    type={chartType}
    width={500}
    height={300}
    options={{
      maintainAspectRatio: false,
      scales: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    }}
    data={data}
  />
);

export const data = {
  radar: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(102, 255, 255, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
      {
        label: "Quantity",
        data: [10, 22, 14, 30, 15, 28],
        backgroundColor: "rgba(22, 227, 119, 0.8)",
      },
    ],
  },
  bar: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of votes",
        data: [17, 29, 11, 7, 9, 16],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(102, 255, 255, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
      {
        label: "Quantity",
        data: [10, 12, 34, 20, 11, 21],
        backgroundColor: "rgba(111, 117, 119, 0.8)",
      },
    ],
  },
  line: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of votes",
        data: [32, 11, 22, 17, 12, 31],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(102, 255, 255, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
      {
        label: "Quantity",
        data: [10, 22, 14, 30, 15, 28],
        backgroundColor: "rgba(111, 117, 119, 0.8)",
      },
    ],
  },
  pie: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of votes",
        data: [4, 16, 8, 25, 32, 13],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(102, 255, 255, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
};
export const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      display: true,
      forward: false,
      name: "radar",
      content: <Charter chartType={"radar"} data={data.radar} />,
      test: "cats",
    },
    "task-2": {
      id: "task-2",
      display: true,
      forward: false,
      name: "bar",
      content: <Charter chartType={"line"} data={data.line} />,
    },
    "task-3": {
      id: "task-3",
      display: true,
      forward: false,
      name: "line",
      content: <Charter chartType={"pie"} data={data.pie} />,
    },
    "task-4": {
      id: "task-4",
      display: true,
      forward: false,
      name: "pie",
      content: <Charter chartType={"bar"} data={data.bar} />,
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Dock 1",
      taskIds: ["task-1", "task-2"],
    },
    "column-2": {
      id: "column-2",
      title: "Dock 2",
      taskIds: ["task-3", "task-4"],
    },
  },
  columnOrder: ["column-1", "column-2"],
};
