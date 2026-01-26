import { mockStockVerifications } from "../types/stockVerification.types";

export const getStockVerifications = async () => {
    return new Promise((resolve) => setTimeout(() => resolve(mockStockVerifications), 500));
};
