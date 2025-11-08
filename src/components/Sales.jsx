import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const salesData = [
  { day: 'Mon', amount: 2400 },
  { day: 'Tue', amount: 1398 },
  { day: 'Wed', amount: 3800 },
  { day: 'Thu', amount: 3908 },
  { day: 'Fri', amount: 4800 },
  { day: 'Sat', amount: 5800 },
  { day: 'Sun', amount: 4300 },
];

export default function Sales() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Sales</h1>
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Weekly Sales</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={salesData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#c41c3d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-50 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold text-green-600">$24,567</p>
          <p className="text-sm text-gray-600">Today</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold text-blue-600">$148,920</p>
          <p className="text-sm text-gray-600">This Week</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold text-purple-600">$589,100</p>
          <p className="text-sm text-gray-600">This Month</p>
        </div>
      </div>
    </div>
  );
}