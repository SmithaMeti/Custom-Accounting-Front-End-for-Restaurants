import { useState } from "react";
import { transactions, categories } from "../data/mockData";

export default function TransactionTable() {
  const [typeFilter, setTypeFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [page, setPage] = useState(1);

  const pageSize = 2;

  const filtered = transactions.filter((t) => {
    return (
      (typeFilter === "All" || t.type === typeFilter) &&
      (categoryFilter === "All" || t.category === categoryFilter)
    );
  });

  const totalPages = Math.ceil(filtered.length / pageSize);

  const paginated = filtered.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <div className="bg-white p-4 shadow rounded w-full">
      <h2 className="font-bold mb-3">Transaction List</h2>

      {/* Filters */}
      <div className="flex gap-4 mb-4">
        <select
          className="border p-1"
          value={typeFilter}
          onChange={(e) => {
            setPage(1);
            setTypeFilter(e.target.value);
          }}
        >
          <option>All</option>
          <option>Income</option>
          <option>Expense</option>
        </select>

        <select
          className="border p-1"
          value={categoryFilter}
          onChange={(e) => {
            setPage(1);
            setCategoryFilter(e.target.value);
          }}
        >
          <option>All</option>
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Table */}
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Date</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Type</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map((t) => (
            <tr key={t.id}>
              <td className="border p-2">{t.date}</td>
              <td className="border p-2">{t.description}</td>
              <td className="border p-2">{t.type}</td>
              <td className="border p-2">{t.category}</td>
              <td className="border p-2">₹{t.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex gap-2 mt-3">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-2 border"
        >
          Prev
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="px-2 border"
        >
          Next
        </button>
      </div>
    </div>
  );
}
