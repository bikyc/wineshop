// src/components/sales/SalesStats.jsx
import { Package, DollarSign, Tag } from 'lucide-react';

const stats = [
  { label: 'Total Orders', value: 0, icon: Package, color: 'purple' },
  { label: 'Payment Received', value: '₹0', icon: DollarSign, color: 'green' },
  { label: 'Bottles Sold', value: 0, icon: Package, color: 'blue' },
  { label: 'Discount Given', value: '₹0', icon: Tag, color: 'orange' },
];

export default function SalesStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, i) => (
        <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">{stat.label}</p>
            <div className={`p-2 rounded-lg bg-${stat.color}-100`}>
              <stat.icon className={`w-5 h-5 text-${stat.color}-600`} />
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
          <p className="text-xs text-gray-500">This month</p>
        </div>
      ))}
    </div>
  );
}