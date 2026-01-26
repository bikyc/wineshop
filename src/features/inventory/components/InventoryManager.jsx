export default function InventoryManager() {
  const items = [
    { name: 'Cabernet Sauvignon', stock: 145, min: 50, status: 'Good' },
    { name: 'Pinot Grigio', stock: 32, min: 40, status: 'Low' },
    { name: 'Merlot Reserve', stock: 89, min: 30, status: 'Good' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Inventory Manager</h1>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {['Product', 'Current Stock', 'Min Stock', 'Status'].map(h => (
                <th key={h} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {items.map((item, i) => (
              <tr key={i}>
                <td className="px-6 py-4 text-sm font-medium">{item.name}</td>
                <td className="px-6 py-4 text-sm">{item.stock}</td>
                <td className="px-6 py-4 text-sm">{item.min}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    item.status === 'Good' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>{item.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}