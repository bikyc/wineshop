import { useState, useEffect } from "react";
import { getCategories } from "../services/categoryService";

/**
 * Hook to fetch categories data
 * @returns {{ categories: import("../types/category.types").Category[], loading: boolean }}
 */
export const useCategories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCategories().then((data) => {
            setCategories(data);
            setLoading(false);
        });
    }, []);

    return { categories, loading };
};
