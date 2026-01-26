import { useState, useEffect } from 'react';
import { getStockRequests } from '../services/stockRequestService';

export const useStockRequest = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getStockRequests().then(data => {
            setRequests(data);
            setLoading(false);
        });
    }, []);

    return { requests, loading };
};
