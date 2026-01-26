import { useState, useEffect } from 'react';
import { getStores } from '../services/storeService';

export const useStores = () => {
    const [stores, setStores] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getStores().then(data => {
            setStores(data);
            setLoading(false);
        });
    }, []);

    return { stores, loading };
};
