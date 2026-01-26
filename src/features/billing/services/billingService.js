import { mockBills } from "../types/billing.types";

export const getBills = async () => {
    return new Promise((resolve) => setTimeout(() => resolve(mockBills), 500));
};
