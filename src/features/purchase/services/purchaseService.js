import { mockPurchases } from "../types/purchase.types";

export const getPurchases = async () => {
    return new Promise((resolve) => setTimeout(() => resolve(mockPurchases), 500));
};
