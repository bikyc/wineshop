import { mockCategories } from "../types/category.types";

export const getCategories = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(mockCategories), 500);
    });
};
