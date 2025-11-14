// src/hooks/useToast.js
import { toast } from 'react-hot-toast';

export const useToast = () => {
  return {
    success: (msg) => toast.success(msg, { duration: 3000 }),
    error: (msg) => toast.error(msg, { duration: 4000 }),
    loading: (msg) => toast.loading(msg)
  };
};