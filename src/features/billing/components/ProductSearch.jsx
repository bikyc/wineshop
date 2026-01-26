// src/components/billing/ProductSearch.jsx
import { useState } from 'react';
import { Search, Plus } from 'lucide-react';

export default function ProductSearch({ addToCart }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [rate, setRate] = useState('');
  const [qty, setQty] = useState('1');

  const handleAdd = () => {
    if (!searchTerm.trim() || !rate) return;

    addToCart({
      id: Date.now(),
      name: searchTerm.trim(),
      rate: parseFloat(rate),
      qty: parseInt(qty) || 1,
      total: parseFloat(rate) * (parseInt(qty) || 1),
    });

    setSearchTerm('');
    setRate('');
    setQty('1');
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Add Product</h2>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {/* Product Search - spans 2 columns */}
        <div className="sm:col-span-2">
          <label
            htmlFor="product-search"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Product Name
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              id="product-search"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search or enter product name..."
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>
        </div>

        {/* Rate */}
        <div>
          <label
            htmlFor="rate"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Rate
          </label>
          <input
            id="rate"
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="0.00"
            step="0.01"
            min="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>

        {/* Quantity + Add Button */}
        <div className="flex gap-2 items-end">
          <div className="flex-1">
            <label
              htmlFor="qty"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Quantity
            </label>
            <input
              id="qty"
              type="number"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              min="1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>

          <button
            onClick={handleAdd}
            disabled={!searchTerm.trim() || !rate}
            className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition flex items-center justify-center"
            title="Add to cart"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}