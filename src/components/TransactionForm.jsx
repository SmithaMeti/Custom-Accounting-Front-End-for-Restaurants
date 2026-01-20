import { useState } from "react";
import { categories } from "../data/mockData";

export default function TransactionForm() {
  const [text, setText] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");

  const handleAnalyze = () => {
    const lower = text.toLowerCase();

    if (lower.includes("vegetable") || lower.includes("food")) {
      setType("Expense");
      setCategory("Food Supplies");
    } else if (lower.includes("sale")) {
      setType("Income");
      setCategory("Food Sales");
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow w-80">
      <h2 className="font-bold mb-4">New Transaction (AI)</h2>

      <input
        className="border p-2 w-full mb-3"
        placeholder="Paid 1200 for vegetables"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={handleAnalyze}
        className="bg-green-600 text-white px-3 py-1 rounded mb-3"
      >
        Analyze with AI
      </button>

      <div className="mb-2">
        <strong>Type:</strong> {type}
      </div>

      <div className="mb-3">
        <strong>Category:</strong>
        <select
          className="border ml-2 p-1"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select</option>
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
