import { mockInventory } from "../types/inventory.types";

export const getInventory = async () => {
    return new Promise((resolve) => setTimeout(() => resolve(mockInventory), 500));
};
