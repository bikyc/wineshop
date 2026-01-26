import { useState, useEffect } from "react";
import { getWholesaleOrders } from "../services/wholesaleService";

/**
 * Hook to fetch wholesale orders data
 * @returns {{ orders: import("../types/wholesale.types").WholesaleOrder[], loading: boolean }}
 */
export const useWholesale = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getWholesaleOrders().then((data) => {
            setOrders(data);
            setLoading(false);
        });
    }, []);

    return { orders, loading };
};
