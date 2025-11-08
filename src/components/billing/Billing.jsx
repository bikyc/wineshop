// src/components/billing/Billing.jsx
import { useState } from 'react';
import BillingHeader from './BillingHeader';
import RecentOrders from './RecentOrders';
import ProductSearch from './ProductSearch';
import CartTable from './CartTable';
import PaymentSummary from './PaymentSummary';
import PaymentActions from './PaymentActions';

export default function Billing() {
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState('0');
  const [paymentMode, setPaymentMode] = useState('cash');

  const subtotal = cart.reduce((sum, i) => sum + i.total, 0);
  const discountAmt = (subtotal * parseFloat(discount)) / 100;
  const total = subtotal - discountAmt;

  const addToCart = (item) => setCart(prev => [...prev, item]);
  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id));

  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen space-y-6">
        <h2>New Order</h2>
      <BillingHeader />
      <RecentOrders />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT: Product + Cart */}
        <div className="lg:col-span-2 space-y-4">
          <ProductSearch addToCart={addToCart} />
          <CartTable cart={cart} removeFromCart={removeFromCart} />
        </div>

        {/* RIGHT: Payment */}
        <div className="space-y-4">
          <PaymentSummary
            subtotal={subtotal}
            discount={discount}
            setDiscount={setDiscount}
            total={total}
          />
          <PaymentActions paymentMode={paymentMode} setPaymentMode={setPaymentMode} />
        </div>
      </div>
    </div>
  );
}