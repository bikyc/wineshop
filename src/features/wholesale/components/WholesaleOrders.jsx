export default function WholesaleOrders() {
  const orders = [
    { id: 'WHO-001', customer: 'Metro Wines', qty: 120, total: '$8,400', status: 'Pending' },
    { id: 'WHO-002', customer: 'City Cellar', qty: 80, total: '$5,600', status: 'Shipped' },
    { id: 'WHO-003', customer: 'Vineyard Co', qty: 200, total: '$14,000', status: 'Delivered' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Wholesale Orders</h1>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {['Order ID', 'Customer', 'Qty (Cases)', 'Total', 'Status'].map(h => (
                <th key={h} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map(o => (
              <tr key={o.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-wine-600">{o.id}</td>
                <td className="px-6 py-4 text-sm">{o.customer}</td>
                <td className="px-6 py-4 text-sm">{o.qty}</td>
                <td className="px-6 py-4 text-sm font-semibold">{o.total}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    o.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                    o.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>{o.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}