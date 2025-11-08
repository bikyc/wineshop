// src/App.jsx
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

import Dashboard from './components/Dashboard';
import Sales from './components/sales/Sales';   // Correct import
import WholesaleOrders from './components/WholesaleOrders';
import Reports from './components/Reports';
import InventoryManager from './components/InventoryManager';
import Purchase from './components/Purchase';
import Expenses from './components/Expenses';
import StockVerification from './components/StockVerification';
import Suppliers from './components/Suppliers';
import Categories from './components/Categories';
import Brands from './components/Brands';
import Customers from './components/Customers';
import Stores from './components/Stores';
import StockTransfer from './components/StockTransfer';
import StockRequest from './components/StockRequest';
import PurchaseOrder from './components/PurchaseOrder';
import Billing from './components/billing/Billing';

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