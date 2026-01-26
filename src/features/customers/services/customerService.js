import { mockCustomers } from "../types/customer.types";

export const getCustomers = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(mockCustomers), 500);
    });
};
