// src/components/billing/RecentOrders.jsx
import { History } from 'lucide-react';

const recentOrders = [
  { id: 'SO-001', total: '₹2,400' },
  { id: 'SO-002', total: '₹800' },
];

export default function RecentOrders() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3 text-sm">
      <History className="w-5 h-5 text-gray-500" />
      <span className="text-gray-600">Recent:</span>
      {recentOrders.map(o => (
        <span key={o.id} className="font-medium text-indigo-600">{o.id}</span>
      ))}
    </div>
  );
}