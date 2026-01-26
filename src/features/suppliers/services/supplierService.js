import { mockSuppliers } from "../types/supplier.types";

export const getSuppliers = async () => {
    return new Promise((resolve) => setTimeout(() => resolve(mockSuppliers), 500));
};
