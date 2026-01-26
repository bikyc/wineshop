// src/components/billing/PaymentSummary.jsx

export default function PaymentSummary({ subtotal, discount, setDiscount, total }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm space-y-3 text-sm">
      <h2 className="text-lg font-semibold">Payment Summary</h2>
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span className="font-medium">₹{subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between items-center">
        <span>Discount (%)</span>
        <input
          type="number"
          value={discount}
          onChange={e => setDiscount(e.target.value)}
          min="0"
          max="100"
          className="w-16 px-2 py-1 border rounded text-right"
        />
      </div>
      <div className="flex justify-between font-semibold text-lg border-t pt-2">
        <span>Total</span>
        <span className="text-indigo-600">₹{total.toFixed(2)}</span>
      </div>
    </div>
  );
}