import { Package, DollarSign, ShoppingBag, Tag } from 'lucide-react';

export default function Stats() {
  const stats = [
    { label: 'Total Orders', value: 0, icon: Package, color: 'purple' },
    { label: 'Payment Received', value: '₹0', icon: DollarSign, color: 'green' },
    { label: 'Bottles Sold', value: 0, icon: ShoppingBag, color: 'blue' },
    { label: 'Discount Given', value: '₹0', icon: Tag, color: 'orange' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((card, i) => (
        <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">{card.label}</p>
            <div className={`p-2 rounded-lg bg-${card.color}-100`}>
              <card.icon className={`w-5 h-5 text-${card.color}-600`} />
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-800">{card.value}</p>
          <p className="text-xs text-gray-500">This month</p>
        </div>
      ))}
    </div>
  );
}
