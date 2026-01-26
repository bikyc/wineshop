import { useState, useEffect } from 'react';
import { getInventory } from '../services/inventoryService';

export const useInventory = () => {
    const [inventory, setInventory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getInventory().then(data => {
            setInventory(data);
            setLoading(false);
        });
    }, []);

    return { inventory, loading };
};
