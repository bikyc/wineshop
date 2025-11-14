// src/components/BrandList.jsx
import { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import AddNewBrand from './AddNewBrand'; // Import the drawer

const brands = [
  // ... your brands array
];

export default function BrandList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Add this state

  const filteredBrands = brands.filter((brand) =>
    Object.values(brand).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      {/* Header: Search, Sort, Add */}
      <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="text-sm font-medium text-gray-700">Sort By</div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="name">Name</option>
            <option value="stock">Stock Status</option>
            <option value="variants">Variants</option>
          </select>
        </div>

        <div className="relative flex-1 sm:flex-initial">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by brand name, parent company, contact name, or contact phone"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Add Brand Button */}
        <button
          onClick={() => setIsDrawerOpen(true)} // Open drawer
          className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
        >
          <Plus className="w-4 h-4" />
          Add Brand
        </button>
      </div>

      {/* Results Count */}
      <div className="px-6 py-3 text-sm text-gray-600 border-b border-gray-200">
        {filteredBrands.length} Results Found
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left p-4 font-medium text-gray-700">Name</th>
              <th className="text-left p-4 font-medium text-gray-700">Parent Company</th>
              <th className="text-left p-4 font-medium text-gray-700">Type</th>
              <th className="text-left p-4 font-medium text-gray-700">Categories</th>
              <th className="text-left p-4 font-medium text-gray-700">Product Variants</th>
              <th className="text-left p-4 font-medium text-gray-700">Stock Status</th>
              <th className="text-left p-4 font-medium text-gray-700">Contact</th>
            </tr>
          </thead>
          <tbody>
            {filteredBrands.map((brand, i) => (
              <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-4 font-medium text-gray-900">{brand.name}</td>
                <td className="p-4 text-gray-600">{brand.parentCompany || '-'}</td>
                <td className="p-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      brand.type === 'Alcoholic'
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {brand.type}
                  </span>
                </td>
                <td className="p-4 text-gray-600">{brand.categories || '-'}</td>
                <td className="p-4 text-gray-900">{brand.variants}</td>
                <td className="p-4">
                  <div className="space-y-1 text-xs">
                    {brand.stock.in > 0 && (
                      <div className="text-green-600">{brand.stock.in} In Stock</div>
                    )}
                    {brand.stock.low > 0 && (
                      <div className="text-yellow-600">{brand.stock.low} Low Stock</div>
                    )}
                    {brand.stock.out > 0 && (
                      <div className="text-red-600">{brand.stock.out} Out of Stock</div>
                    )}
                    {brand.stock.in === 0 && brand.stock.low === 0 && brand.stock.out === 0 && (
                      <div className="text-gray-500">No Stock Available</div>
                    )}
                  </div>
                </td>
                <td className="p-4 text-gray-600">{brand.contact || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Drawer - Must be INSIDE return */}
      {isDrawerOpen && (
        <AddNewBrand
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        />
      )}
    </div>
  ); // End of return
}