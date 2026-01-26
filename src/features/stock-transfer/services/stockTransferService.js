import { mockStockTransfers } from "../types/stockTransfer.types";

export const getStockTransfers = async () => {
    return new Promise((resolve) => setTimeout(() => resolve(mockStockTransfers), 500));
};
