export default function Reports() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Reports</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition">
          <h3 className="text-lg font-semibold mb-2">Sales Report</h3>
          <p className="text-sm text-gray-600">Daily, weekly, monthly sales breakdown</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition">
          <h3 className="text-lg font-semibold mb-2">Inventory Report</h3>
          <p className="text-sm text-gray-600">Stock levels, low stock alerts</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition">
          <h3 className="text-lg font-semibold mb-2">Expense Report</h3>
          <p className="text-sm text-gray-600">All expenses by category</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition">
          <h3 className="text-lg font-semibold mb-2">Profit & Loss</h3>
          <p className="text-sm text-gray-600">Net profit analysis</p>
        </div>
      </div>
    </div>
  );
}