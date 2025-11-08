// src/components/Sidebar.jsx
import { Link, useLocation } from 'react-router-dom';
import {
    Home, Package, ShoppingCart, Users, BarChart3, Settings, LogOut,
    X, Menu, DollarSign, FileText, Box, Truck, Receipt, CheckSquare,
    UserCheck, Layers, ArrowRightLeft, ArrowDownUp, ClipboardList,
} from 'lucide-react';

const navItems = [
    { icon: Home, label: 'Dashboard', to: '/' },
    { icon: DollarSign, label: 'Sales', to: '/sales' },
    { icon: ShoppingCart, label: 'Wholesale Orders', to: '/wholesale-orders' },
    { icon: FileText, label: 'Reports', to: '/reports' },
    { icon: Box, label: 'Inventory Manager', to: '/inventory-manager' },
    { icon: Truck, label: 'Purchase', to: '/purchase' },
    { icon: Receipt, label: 'Expenses', to: '/expenses' },
    { icon: CheckSquare, label: 'Stock Verification', to: '/stock-verification' },
    { icon: UserCheck, label: 'Suppliers', to: '/suppliers' },
    { icon: Layers, label: 'Categories', to: '/categories' },
    { icon: Package, label: 'Brands', to: '/brands' },
    { icon: Users, label: 'Customers', to: '/customers' },
    { icon: ArrowRightLeft, label: 'Stores', to: '/stores' },
    { icon: BarChart3, label: 'Stock Transfer', to: '/stock-transfer' },
    { icon: ArrowDownUp, label: 'Stock Request', to: '/stock-request' },
    { icon: ClipboardList, label: 'Purchase Order', to: '/purchase-order' },
];

export default function Sidebar({ isOpen, toggle, isExpanded, setExpanded }) {
    const location = useLocation();

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={toggle} />
            )}

            <aside
                onMouseEnter={() => setExpanded(true)}
                onMouseLeave={() => setExpanded(false)}
                className={`
          fixed top-0 left-0 z-50 h-full bg-wine-900 text-white
          transition-all duration-300 ease-in-out
          ${isExpanded || isOpen ? 'w-64' : 'w-20'}
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
            >
                <div className="flex items-center justify-between p-5 border-b border-wine-800">
                    <h2 className={`font-bold text-xl ${isExpanded || isOpen ? 'block' : 'hidden'}`}>
                        WineShop
                    </h2>
                    <button onClick={toggle} className="lg:hidden">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <nav className="p-4 space-y-1">
                    {navItems.map((item, i) => {
                        const isActive = location.pathname === item.to;
                        return (
                            <Link
                                key={i}
                                to={item.to}
                                className={`
                  w-full flex items-center gap-3 px-3 py-2 rounded-lg transition
                  ${isActive ? 'bg-wine-700 text-white' : 'hover:bg-wine-800 text-wine-100'}
                `}
                            >
                                <item.icon className="w-5 h-5 flex-shrink-0" />
                                <span className={`${isExpanded || isOpen ? 'block' : 'hidden'}`}>
                                    {item.label}
                                </span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="absolute bottom-0 w-full p-4 border-t border-wine-800">
                    <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-wine-800 text-wine-100">
                        <LogOut className="w-5 h-5 flex-shrink-0" />
                        <span className={`${isExpanded || isOpen ? 'block' : 'hidden'}`}>Logout</span>
                    </button>
                </div>
            </aside>

            <button
                onClick={toggle}
                className="fixed bottom-4 right-4 bg-wine-600 text-white p-3 rounded-full shadow-lg z-50 lg:hidden"
            >
                <Menu className="w-6 h-6" />
            </button>
        </>
    );
}