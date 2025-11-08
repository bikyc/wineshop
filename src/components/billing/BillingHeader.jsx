// src/components/billing/BillingHeader.jsx
import { useState } from 'react';
import { Settings, RefreshCw } from 'lucide-react';

export default function BillingHeader() {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [salesPerson] = useState('John Doe');

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name</label>
          <input
            type="text"
            value={customerName}
            onChange={e => setCustomerName(e.target.value)}
            placeholder="Walk-in"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input
            type="text"
            value={customerPhone}
            onChange={e => setCustomerPhone(e.target.value)}
            placeholder="+91 98765 43210"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Sales Person</label>
          <input
            type="text"
            value={salesPerson}
            readOnly
            className="w-full px-3 py-2 border rounded-lg bg-gray-50"
          />
        </div>
        <div className="flex items-end gap-2">
          <button className="p-2 text-gray-600 hover:text-indigo-600">
            <RefreshCw className="w-5 h-5" title="Sync" />
          </button>
          <button className="p-2 text-gray-600 hover:text-indigo-600">
            <Settings className="w-5 h-5" title="Settings" />
          </button>
        </div>
      </div>
    </div>
  );
}