import { mockPurchaseOrders } from "../types/purchaseOrder.types";

export const getPurchaseOrders = async () => {
    return new Promise((resolve) => setTimeout(() => resolve(mockPurchaseOrders), 500));
};
