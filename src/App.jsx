// src/App.jsx
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

import Dashboard from '@/features/dashboard/components/Dashboard';
import Sales from '@/features/sales/components/Sales';
import WholesaleOrders from '@/features/wholesale/components/WholesaleOrders';
import Reports from '@/features/reports/components/Reports';
import InventoryManager from '@/features/inventory/components/InventoryManager';
import Purchase from '@/features/purchase/components/Purchase';
import Expenses from '@/features/expenses/components/Expenses';
import StockVerification from '@/features/stock-verification/components/StockVerification';
import Suppliers from '@/features/suppliers/components/Suppliers';
import Categories from '@/features/categories/components/Categories';
import Brands from '@/features/brands/components/Brands';
import Customers from '@/features/customers/components/Customers';
import Stores from '@/features/stores/components/Stores';
import StockTransfer from '@/features/stock-transfer/components/StockTransfer';
import StockRequest from '@/features/stock-request/components/StockRequest';
import PurchaseOrder from '@/features/purchase-order/components/PurchaseOrder';
import Billing from '@/features/billing/components/Billing';

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const sidebarWidth = expanded ? 16 : 5;

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        isOpen={mobileOpen}
        toggle={() => setMobileOpen(v => !v)}
        isExpanded={expanded}
        setExpanded={setExpanded}
      />

      <div
        className="flex-1 flex flex-col overflow-hidden transition-all duration-300"
        style={{ marginLeft: `${sidebarWidth}rem` }}
      >
        <Header toggleSidebar={() => setMobileOpen(v => !v)} />

        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/wholesale-orders" element={<WholesaleOrders />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/inventory-manager" element={<InventoryManager />} />
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/stock-verification" element={<StockVerification />} />
            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/stores" element={<Stores />} />
            <Route path="/stock-transfer" element={<StockTransfer />} />
            <Route path="/stock-request" element={<StockRequest />} />
            <Route path="/purchase-order" element={<PurchaseOrder />} />
            <Route path="/billing" element={<Billing />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}