import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex gap-6 p-4 bg-gray-900 text-white">
      <h1 className="font-bold">HelloBooks – Restaurant</h1>
      <Link to="/">Dashboard</Link>
      <Link to="/transactions">Transactions</Link>
      <Link to="/reports">Reports</Link>
    </div>
  );
}
