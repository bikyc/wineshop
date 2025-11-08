// src/components/billing/PaymentActions.jsx
import { CreditCard } from 'lucide-react';

export default function PaymentActions({ paymentMode, setPaymentMode }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Payment Mode</label>
        <select
          value={paymentMode}
          onChange={e => setPaymentMode(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="cash">Cash</option>
          <option value="card">Card</option>
          <option value="upi">UPI</option>
        </select>
      </div>
      <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-medium flex items-center justify-center gap-2">
        <CreditCard className="w-5 h-5" />
        Complete Payment
      </button>
    </div>
  );
}