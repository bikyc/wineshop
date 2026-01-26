import { useState, useEffect } from 'react';
import { getReports } from '../services/reportService';

export const useReports = () => {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getReports().then(data => {
            setReports(data);
            setLoading(false);
        });
    }, []);

    return { reports, loading };
};
