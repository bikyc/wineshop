const orders = [
  { id: '#ORD-001', customer: 'John Doe', wine: 'Cabernet Sauvignon', qty: 2, total: '$89.98', status: 'Delivered' },
  { id: '#ORD-002', customer: 'Emma Wilson', wine: 'Pinot Grigio', qty: 1, total: '$34.99', status: 'Processing' },
  { id: '#ORD-003', customer: 'Michael Chen', wine: 'Merlot Reserve', qty: 3, total: '$179.97', status: 'Shipped' },
  { id: '#ORD-004', customer: 'Sarah Miller', wine: 'Chardonnay', qty: 1, total: '$42.50', status: 'Delivered' },
]

export default function OrdersTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-5 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Recent Orders</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {['Order ID', 'Customer', 'Wine', 'Qty', 'Total', 'Status'].map((h) => (
                <th
                  key={h}
                  className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-4 py-4 text-sm font-medium text-wine-600">{order.id}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{order.customer}</td>
                <td className="px-4 py-4 text-sm text-gray-600">{order.wine}</td>
                <td className="px-4 py-4 text-sm text-gray-600">{order.qty}</td>
                <td className="px-4 py-4 text-sm font-semibold text-gray-900">{order.total}</td>
                <td className="px-4 py-4">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      order.status === 'Delivered'
                        ? 'bg-green-100 text-green-800'
                        : order.status === 'Processing'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}