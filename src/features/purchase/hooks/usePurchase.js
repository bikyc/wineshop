import { useState, useEffect } from 'react';
import { getPurchases } from '../services/purchaseService';

export const usePurchase = () => {
    const [purchases, setPurchases] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPurchases().then(data => {
            setPurchases(data);
            setLoading(false);
        });
    }, []);

    return { purchases, loading };
};
