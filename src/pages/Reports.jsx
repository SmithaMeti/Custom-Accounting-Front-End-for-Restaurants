import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { weeklySales } from "../data/mockData";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Reports() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Daily Sales (₹)",
        data: weeklySales,
        backgroundColor: "#2563eb",
      },
    ],
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Restaurant Reports</h1>

      {/* Summary cards */}
      <div className="grid grid-cols-4 gap-4">
        <Card title="Weekly Revenue" value="₹35,300" />
        <Card title="Food Cost" value="₹14,200" />
        <Card title="Staff Cost" value="₹10,500" />
        <Card title="Net Profit" value="₹10,600" />
      </div>

      {/* Chart */}
      <div className="bg-white p-6 shadow rounded w-full">
        <h2 className="font-semibold mb-4">Weekly Sales Overview</h2>
        <div className="h-[400px]">
          <Bar
            data={data}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </div>
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white shadow rounded p-4">
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}
