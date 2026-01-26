import { mockStockRequests } from "../types/stockRequest.types";

export const getStockRequests = async () => {
    return new Promise((resolve) => setTimeout(() => resolve(mockStockRequests), 500));
};
