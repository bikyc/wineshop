import { useState, useEffect } from 'react';
import { getStockVerifications } from '../services/stockVerificationService';

export const useStockVerification = () => {
    const [verifications, setVerifications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getStockVerifications().then(data => {
            setVerifications(data);
            setLoading(false);
        });
    }, []);

    return { verifications, loading };
};
