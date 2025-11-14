// src/components/sales/Sales.jsx
import SalesHeader from './SalesHeader';
import SalesStats from './SalesStats';
import SalesFilters from './SalesFilters';
import SalesViewToggle from './SalesViewToggle';
import SalesTable from './SalesTable';

export default function Sales() {
  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen">
      <SalesHeader />
      <SalesStats />
      <SalesFilters />
      <SalesViewToggle />
      <SalesTable />
    </div>
  );
}