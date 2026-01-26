import { mockWholesaleOrders } from "../types/wholesale.types";

export const getWholesaleOrders = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(mockWholesaleOrders), 500);
    });
};
