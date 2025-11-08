// src/components/billing/CartTable.jsx
import { Trash2 } from 'lucide-react';

export default function CartTable({ cart, removeFromCart }) {
  if (cart.length === 0) return null;

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left">Product</th>
            <th className="px-4 py-2 text-right">Rate</th>
            <th className="px-4 py-2 text-center">Qty</th>
            <th className="px-4 py-2 text-right">Total</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id} className="border-t">
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2 text-right">₹{item.rate}</td>
              <td className="px-4 py-2 text-center">{item.qty}</td>
              <td className="px-4 py-2 text-right font-medium">₹{item.total}</td>
              <td className="px-4 py-2 text-right">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}