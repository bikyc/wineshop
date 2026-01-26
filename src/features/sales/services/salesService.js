import { mockSales } from "../types/sales.types";

export const getSales = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(mockSales), 500);
    });
};
