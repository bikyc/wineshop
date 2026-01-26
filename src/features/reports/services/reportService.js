import { mockReports } from "../types/report.types";

export const getReports = async () => {
    return new Promise((resolve) => setTimeout(() => resolve(mockReports), 500));
};
