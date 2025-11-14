// src/features/brands/services/brandService.js
import { brandApi } from './API/brandApi';
import { useToast } from '@/shared/hooks/useToast';

export const brandService = {
  getAll: async () => {
    try {
      return await brandApi.getAll();
    } catch (err) {
      const toast = useToast();
      toast.error('Failed to load brands');
      throw err;
    }
  },

  create: async (data) => {
    const toast = useToast();
    try {
      const newBrand = await brandApi.create(data);
      toast.success('Brand added!');
      return newBrand;
    } catch (err) {
      toast.error('Failed to add brand');
      throw err;
    }
  },

  update: async (id, data) => {
    const toast = useToast();
    try {
      await brandApi.update(id, data);
      toast.success('Brand updated!');
    } catch (err) {
      toast.error('Failed to update');
      throw err;
    }
  },
};