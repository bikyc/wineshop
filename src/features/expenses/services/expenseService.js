import { mockExpenses } from "../types/expense.types";

export const getExpenses = async () => {
    return new Promise((resolve) => setTimeout(() => resolve(mockExpenses), 500));
};
