import TransactionForm from "../components/TransactionForm";
import TransactionTable from "../components/TransactionTable";

export default function Transactions() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>

      <div className="flex gap-8">
        <TransactionForm />
        <TransactionTable />
      </div>
    </div>
  );
}
