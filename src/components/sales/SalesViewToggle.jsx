// src/components/sales/SalesViewToggle.jsx
import { Package, Tag } from 'lucide-react';
import { useState } from 'react';

export default function SalesViewToggle() {
  const [view, setView] = useState('order');

  return (
    <div className="flex gap-2 mb-6">
      <button
        onClick={() => setView('order')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
          view === 'order'
            ? 'bg-indigo-600 text-white'
            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
        }`}
      >
        <Package className="w-4 h-4" />
        Order View
      </button>
      <button
        onClick={() => setView('product')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
          view === 'product'
            ? 'bg-indigo-600 text-white'
          : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
        }`}
      >
        <Tag className="w-4 h-4" />
        Product View
      </button>
    </div>
  );
}