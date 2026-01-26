import { useState, useEffect } from 'react';
import { getSuppliers } from '../services/supplierService';

export const useSuppliers = () => {
    const [suppliers, setSuppliers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getSuppliers().then(data => {
            setSuppliers(data);
            setLoading(false);
        });
    }, []);

    return { suppliers, loading };
};
