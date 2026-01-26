import { mockStores } from "../types/store.types";

export const getStores = async () => {
    return new Promise((resolve) => setTimeout(() => resolve(mockStores), 500));
};
