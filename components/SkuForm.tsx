import React from 'react';
import type { SkuFormData } from '../types';
import { ECOMMERCE_PLATFORMS, SKU_STYLES } from '../constants';

type Props = {
  onGenerate: (data: SkuFormData) => void;
  formData: SkuFormData;
  setFormData: React.Dispatch<React.SetStateAction<SkuFormData>>;
};

export default function SkuForm({ onGenerate, formData, setFormData }: Props) {
  const onTxt = (k: keyof SkuFormData) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setFormData(v => ({ ...v, [k]: e.target.value }));

  const onSelect =
    (k: keyof SkuFormData) =>
    (e: React.ChangeEvent<HTMLSelectElement>) =>
      setFormData(v => ({ ...v, [k]: e.target.value }));

  const onCSV =
    (k: 'colors' | 'sizes') =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const arr = e.target.value
        .split(',')
        .map(s => s.trim())
        .filter(Boolean);
      setFormData(v => ({ ...v, [k]: arr }));
    };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm">Platform</span>
          <select
            className="w-full bg-gray-900 rounded p-2"
            value={formData.platform}
            onChange={onSelect('platform')}
          >
            {ECOMMERCE_PLATFORMS.map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-sm">SKU Style</span>
          <select
            className="w-full bg-gray-900 rounded p-2"
            value={formData.skuStyle}
            onChange={onSelect('skuStyle')}
          >
            {SKU_STYLES.map(s => (
              <option key={s.name} value={s.name}>{s.name}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-sm">Brand</span>
          <input className="w-full bg-gray-900 rounded p-2"
            value={formData.brandName} onChange={onTxt('brandName')} />
        </label>

        <label className="block">
          <span className="text-sm">Collection</span>
          <input className="w-full bg-gray-900 rounded p-2"
            value={formData.collection} onChange={onTxt('collection')} />
        </label>

        <label className="block md:col-span-2">
          <span className="text-sm">Product Name</span>
          <input className="w-full bg-gray-900 rounded p-2"
            value={formData.productName} onChange={onTxt('productName')} />
        </label>

        <label className="block">
          <span className="text-sm">Category</span>
          <input className="w-full bg-gray-900 rounded p-2"
            value={formData.category} onChange={onTxt('category')} />
        </label>

        <label className="block">
          <span className="text-sm">Subcategory</span>
          <input className="w-full bg-gray-900 rounded p-2"
            value={formData.subCategory} onChange={onTxt('subCategory')} />
        </label>

        <label className="block">
          <span className="text-sm">Colors (comma-separated)</span>
          <input className="w-full bg-gray-900 rounded p-2"
            value={formData.colors.join(', ')} onChange={onCSV('colors')} />
        </label>

        <label className="block">
          <span className="text-sm">Sizes (comma-separated)</span>
          <input className="w-full bg-gray-900 rounded p-2"
            value={formData.sizes.join(', ')} onChange={onCSV('sizes')} />
        </label>
      </div>

      <button type="submit"
        className="px-4 py-2 bg-green-500 text-gray-900 rounded">
        Generate
      </button>
    </form>
  );
}
