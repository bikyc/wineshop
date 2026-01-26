import { useState, useEffect } from "react";
import { getSales } from "../services/salesService";

/**
 * Hook to fetch sales data
 * @returns {{ sales: import("../types/sales.types").Sale[], loading: boolean }}
 */
export const useSales = () => {
    const [sales, setSales] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getSales().then((data) => {
            setSales(data);
            setLoading(false);
        });
    }, []);

    return { sales, loading };
};
