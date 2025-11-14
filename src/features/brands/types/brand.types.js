// src/features/brands/types/brand.types.js

/**
 * @typedef {Object} Brand
 * @property {number} [id] - Unique identifier for the brand
 * @property {string} name - Name of the brand (required)
 * @property {'Alcoholic' | 'Non-Alcoholic'} type - Type of beverage
 * @property {string} [parentCompany] - Parent company name
 * @property {string} [categories] - e.g. IMFL, Beer, Wine
 * @property {number} [variants] - Number of product variants
 * @property {{ in: number; low: number; out: number }} [stock] - Stock status
 * @property {string} [contact] - Contact person or phone
 * @property {boolean} isEnabled - Whether brand is active
 */

/**
 * @typedef {Object} StockStatus
 * @property {number} in - Units in stock
 * @property {number} low - Units in low stock
 * @property {number} out - Units out of stock
 */

/** @type {Brand[]} */
export const mockBrands = [
  {
    id: 1,
    name: "7 Peaks",
    type: "Alcoholic",
    parentCompany: "ABC Ltd",
    categories: "IMFL",
    variants: 3,
    stock: { in: 50, low: 5, out: 0 },
    contact: "John Doe",
    isEnabled: true
  },
  {
    id: 2,
    name: "Royal Stag",
    type: "Alcoholic",
    parentCompany: "Pernod Ricard",
    categories: "IMFL",
    variants: 5,
    stock: { in: 120, low: 10, out: 0 },
    contact: "contact@royalstag.com",
    isEnabled: true
  },
  {
    id: 3,
    name: "Kingfisher",
    type: "Alcoholic",
    parentCompany: "United Breweries",
    categories: "Beer",
    variants: 4,
    stock: { in: 0, low: 0, out: 15 },
    contact: "support@kingfisher.com",
    isEnabled: true
  }
];