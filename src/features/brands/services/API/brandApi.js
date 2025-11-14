// src/features/brands/services/api/brandApi.js

// Mock data (replace with real backend later)
let mockBrands = [
  {
    id: 1,
    name: "7 Peaks",
    type: "Alcoholic",
    parentCompany: "ABC Ltd",
    categories: "IMFL",
    suppliers: "Supplier A",
    address: "123 Main St",
    regdOffice: "Mumbai",
    countryOfOrigin: "India",
    isEnabled: true,
    notes: "Premium whiskey",
    contacts: [
      { name: "John Doe", role: "Manager", phone: "9876543210", email: "john@abc.com" }
    ],
    bankDetails: [
      { accountHolder: "ABC Ltd", bankName: "HDFC", accountNumber: "1234567890", ifsc: "HDFC0001234", branch: "Mumbai" }
    ]
  }
];

/**
 * Brand API - Fully isolated, no external dependency
 */
export const brandApi = {
  /** @returns {Promise<Array>} */
  getAll: () => {
    return new Promise(resolve => {
      setTimeout(() => resolve([...mockBrands]), 300);
    });
  },

  /** @param {number} id */
  getById: (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const brand = mockBrands.find(b => b.id === id);
        if (brand) resolve({ ...brand });
        else reject(new Error("Brand not found"));
      }, 300);
    });
  },

  /** @param {Object} data */
  create: (data) => {
    return new Promise(resolve => {
      setTimeout(() => {
        const newBrand = {
          ...data,
          id: Math.max(...mockBrands.map(b => b.id), 0) + 1
        };
        mockBrands.push(newBrand);
        resolve(newBrand);
      }, 500);
    });
  },

  /** @param {number} id @param {Object} data */
  update: (id, data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = mockBrands.findIndex(b => b.id === id);
        if (index !== -1) {
          mockBrands[index] = { ...mockBrands[index], ...data, id };
          resolve(mockBrands[index]);
        } else {
          reject(new Error("Brand not found"));
        }
      }, 500);
    });
  },
};