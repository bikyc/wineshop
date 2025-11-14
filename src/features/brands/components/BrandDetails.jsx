// src/components/BrandDetails.jsx
import { Package, CheckCircle, XCircle, Archive, Wine, Beer } from 'lucide-react';

const stats = [
  { label: 'Brands', value: 229, icon: Archive, color: 'green' },
  { label: 'Brands in stock', value: 204, icon: CheckCircle, color: 'purple' },
  { label: 'Brands out of stock', value: 0, icon: XCircle, color: 'green' },
  { label: 'Products', value: 305, icon: Package, color: 'green' },
  { label: 'Alcoholic Brands', value: 225, icon: Wine, color: 'purple' },
  { label: 'Non Alcoholic Brands', value: 4, icon: Beer, color: 'green' },
];

export default function BrandDetails() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">{stat.label}</p>
            <div className={`p-2 rounded-lg bg-${stat.color}-100`}>
              <stat.icon className={`w-5 h-5 text-${stat.color}-600`} />
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}