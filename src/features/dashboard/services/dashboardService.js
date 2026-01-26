import { mockDashboardData } from "../types/dashboard.types";

export const getDashboardData = async () => {
    return new Promise((resolve) => setTimeout(() => resolve(mockDashboardData), 500));
};
