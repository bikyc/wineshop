import { useState, useEffect } from 'react';
import { getStockTransfers } from '../services/stockTransferService';

export const useStockTransfer = () => {
    const [transfers, setTransfers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getStockTransfers().then(data => {
            setTransfers(data);
            setLoading(false);
        });
    }, []);

    return { transfers, loading };
};
