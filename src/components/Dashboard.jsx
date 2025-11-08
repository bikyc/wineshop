import Stats from '../components/Stats';
import OrdersTable from '../components/OrdersTable';
import SalesChart from '../components/SalesChart';

export default function Dashboard() {
  return (
    <div className="p-4 md:p-6 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      <Stats />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <OrdersTable />
        </div>
        <div className="lg:col-span-1">
          <SalesChart />
        </div>
      </div>
    </div>
  );
}