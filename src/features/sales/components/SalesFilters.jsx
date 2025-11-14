// src/components/sales/SalesFilters.jsx
import { Search, Calendar, Filter } from 'lucide-react';

export default function SalesFilters() {
  return (
    <div className="flex flex-col lg:flex-row gap-3 items-center bg-white p-4 rounded-xl shadow-sm mb-6">
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search orders or products..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
        <option>All Stores</option>
      </select>

      <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg">
        <Calendar className="w-5 h-5 text-gray-500" />
        <span className="text-sm">01 Nov 2025 - 08 Nov 2025</span>
      </div>

      <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
        <option>Date (Desc)</option>
      </select>

      <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
        <Filter className="w-5 h-5" />
        Filters
      </button>
    </div>
  );
}