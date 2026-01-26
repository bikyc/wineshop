import { useState, useEffect } from 'react';
import { getBills } from '../services/billingService';

export const useBilling = () => {
    const [bills, setBills] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getBills().then(data => {
            setBills(data);
            setLoading(false);
        });
    }, []);

    return { bills, loading };
};
