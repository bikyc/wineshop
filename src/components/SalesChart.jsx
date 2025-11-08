import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', sales: 4200 },
  { name: 'Feb', sales: 3800 },
  { name: 'Mar', sales: 5100 },
  { name: 'Apr', sales: 4800 },
  { name: 'May', sales: 6200 },
  { name: 'Jun', sales: 7100 },
]

export default function SalesChart() {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 h-full">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Sales Overview</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#c41c3d" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}