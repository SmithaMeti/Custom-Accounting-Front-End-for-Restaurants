import StatCard from "../components/StatCard";
import AIChat from "../components/AIChat";
import { dashboardStats, transactions } from "../data/mockData";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Dashboard() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Daily Sales",
        data: [5000, 7200, 6100, 8000, 9000],
        backgroundColor: "#2563eb",
      },
    ],
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Restaurant Dashboard</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-4">
        <StatCard title="Today's Revenue" value={`₹${dashboardStats.revenue}`} />
        <StatCard title="Food Cost" value={`₹${dashboardStats.foodCost}`} />
        <StatCard title="Staff Cost" value={`₹${dashboardStats.staffCost}`} />
        <StatCard title="Profit" value={`₹${dashboardStats.profit}`} />
      </div>

      {/* Charts + Table */}
      <div className="grid grid-cols-3 gap-6">
        {/* Chart */}
        <div className="col-span-2 bg-white p-4 shadow rounded">
          <h2 className="font-semibold mb-2">Weekly Sales</h2>
          <div className="h-[300px]">
            <Bar
              data={data}
              options={{ responsive: true, maintainAspectRatio: false }}
            />
          </div>
        </div>

        {/* Recent transactions */}
        <div className="bg-white p-4 shadow rounded">
          <h2 className="font-semibold mb-2">Recent Transactions</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left">Desc</th>
                <th>Type</th>
                <th>₹</th>
              </tr>
            </thead>
            <tbody>
              {transactions.slice(0, 4).map((t) => (
                <tr key={t.id} className="border-b">
                  <td>{t.description}</td>
                  <td>{t.type}</td>
                  <td>{t.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AIChat />
    </div>
  );
}
