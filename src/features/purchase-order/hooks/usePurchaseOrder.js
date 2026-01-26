import { useState, useEffect } from 'react';
import { getPurchaseOrders } from '../services/purchaseOrderService';

export const usePurchaseOrder = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPurchaseOrders().then(data => {
            setOrders(data);
            setLoading(false);
        });
    }, []);

    return { orders, loading };
};
