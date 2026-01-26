import { useState, useEffect } from 'react';
import { getDashboardData } from '../services/dashboardService';

export const useDashboard = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getDashboardData().then(result => {
            setData(result);
            setLoading(false);
        });
    }, []);

    return { data, loading };
};
