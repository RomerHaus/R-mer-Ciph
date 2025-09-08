import React from 'react';

export type SkuStyle = {
  name: string;
  format: string;
  description: string;
  // FIX: Added 'sellingPrice' to Omit as it is a financial detail not used in SKU format generation.
  required: (keyof Omit<SkuFormData, 'colors' | 'sizes' | 'productUrl' | 'imageUrl' | 'costOfGoods' | 'shippingCost' | 'stateTax' | 'federalTax' | 'sellingPrice'>)[];
};

export type EcommercePlatform = {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export interface SkuFormData {
  platform: string;
  skuStyle: string;
  brandName?: string;
  collection?: string;
  productName?: string;
  category?: string; // Corresponds to "Product Type" in the UI
  subCategory?: string;
  variantModel?: string;
  customDetail?: string;
  colors: string[];
  sizes: string[];
  productUrl?: string;
  imageUrl?: string;
  costOfGoods?: number;
  shippingCost?: number;
  stateTax?: number;
  federalTax?: number;
  // FIX: Added missing sellingPrice property to store product's selling price.
  sellingPrice?: number;
}

export interface VariantData {
  color: string;
  size: string;
}

export interface HistoryEntry {
  id: string;
  sku: string;
  formData: SkuFormData;
  variant: VariantData;
}
