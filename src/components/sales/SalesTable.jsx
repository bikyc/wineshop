// src/components/sales/SalesTable.jsx
export default function SalesTable() {
  const orders = [
    { id: 'SO-001', date: '08 Nov 2025', customer: 'John Doe', items: 3, total: '₹2,400', status: 'Paid' },
    { id: 'SO-002', date: '07 Nov 2025', customer: 'Jane Smith', items: 1, total: '₹800', status: 'Pending' },
  ];

  if (orders.length === 0) {
    return (
      <div className="bg-white p-12 rounded-xl shadow-sm text-center">
        <p className="text-gray-500">No orders found</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            {['Order ID', 'Date', 'Customer', 'Items', 'Total', 'Status'].map(h => (
              <th key={h} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {orders.map(order => (
            <tr key={order.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm font-medium text-indigo-600">{order.id}</td>
              <td className="px-6 py-4 text-sm">{order.date}</td>
              <td className="px-6 py-4 text-sm">{order.customer}</td>
              <td className="px-6 py-4 text-sm">{order.items}</td>
              <td className="px-6 py-4 text-sm font-semibold">{order.total}</td>
              <td className="px-6 py-4">
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  order.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}