// src/features/brands/hooks/useBrands.js
import { useState, useEffect } from 'react';
import { brandService } from '../services/brandService';
import { mockBrands } from '../types/brand.types.js';

/**
 * @typedef {import('../types/brand.types.js').Brand} Brand
 */

/**
 * Custom hook for managing brands with API + mock fallback
 * @returns {{
 *   brands: Brand[],
 *   loading: boolean,
 *   add: (data: Omit<Brand, 'id'>) => Promise<Brand>,
 *   update: (id: number, data: Partial<Brand>) => Promise<void>,
 *   refetch: () => Promise<void>
 * }}
 */
export function useBrands() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      // Try real API first
      const data = await brandService.getAll();
      setBrands(data.length > 0 ? data : mockBrands);
    } catch (err) {
      // Fallback to mock data if API fails
      console.warn('API failed, using mock data');
      setBrands(mockBrands);
    } finally {
      setLoading(false);
    }
  };

  const add = async (data) => {
    try {
      const newBrand = await brandService.create(data);
      setBrands((prev) => [...prev, newBrand]);
      return newBrand;
    } catch (err) {
      // On error, simulate add with mock
      const simulated = {
        ...data,
        id: Math.max(...brands.map(b => b.id || 0), 0) + 1,
      };
      setBrands((prev) => [...prev, simulated]);
      return simulated;
    }
  };

  const update = async (id, data) => {
    try {
      await brandService.update(id, data);
      setBrands((prev) =>
        prev.map((b) => (b.id === id ? { ...b, ...data } : b))
      );
    } catch (err) {
      // Simulate update
      setBrands((prev) =>
        prev.map((b) => (b.id === id ? { ...b, ...data } : b))
      );
    }
  };

  useEffect(() => {
    load();
  }, []);

  return { brands, loading, add, update, refetch: load };
}