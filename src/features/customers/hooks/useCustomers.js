import { useState, useEffect } from "react";
import { getCustomers } from "../services/customerService";

/**
 * Hook to fetch customers data
 * @returns {{ customers: import("../types/customer.types").Customer[], loading: boolean }}
 */
export const useCustomers = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCustomers().then((data) => {
            setCustomers(data);
            setLoading(false);
        });
    }, []);

    return { customers, loading };
};
