// src/components/sales/SalesHeader.jsx
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SalesHeader() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Sales Management</h1>
        <p className="mt-1 text-gray-600">Track and analyze your sales performance.</p>
      </div>

      <button
        onClick={() => navigate('/billing')}   // ONLY ON CLICK
        className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-lg hover:bg-indigo-700 transition shadow-md"
      >
        <Plus className="w-5 h-5" />
        Create New Bill
      </button>
    </div>
  );
}