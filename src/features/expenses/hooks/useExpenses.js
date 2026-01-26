import { useState, useEffect } from 'react';
import { getExpenses } from '../services/expenseService';

export const useExpenses = () => {
    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getExpenses().then(data => {
            setExpenses(data);
            setLoading(false);
        });
    }, []);

    return { expenses, loading };
};
