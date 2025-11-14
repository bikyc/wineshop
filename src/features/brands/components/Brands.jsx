// src/components/Brands.jsx
import BrandDetails from './BrandDetails';
import BrandList from './BrandList';

export default function Brands() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Brands</h1>

      <BrandDetails />
      <BrandList />
    </div>
  );
}