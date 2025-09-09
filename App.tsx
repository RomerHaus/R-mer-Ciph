import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SkuForm from './components/SkuForm';
import ResultsDisplay from './components/ResultsDisplay';
import HistoryDisplay from './components/HistoryDisplay';
import type { SkuFormData, HistoryEntry } from './types';
import { SKU_STYLES } from './constants';

const slugify = (t: string = '') =>
  t.toUpperCase().replace(/\s+/g, '-').replace(/[^A-Z0-9-]/g, '').slice(0, 5);

export default function App() {
  const [formData, setFormData] = useState<SkuFormData>({
    platform: 'Generic',
    skuStyle: 'Simple',
    colors: [],
    sizes: [],
    brandName: '',
    collection: '',
    productName: '',
    category: '',
    subCategory: '',
    variantModel: '',
    customDetail: '',
    productUrl: '',
    imageUrl: '',
    costOfGoods: undefined,
    shippingCost: undefined,
    stateTax: undefined,
    federalTax: undefined,
    sellingPrice: undefined,
  });

  const [history, setHistory] = useState<HistoryEntry[]>(() => {
    try {
      const saved = localStorage.getItem('skuHistory');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [result, setResult] =
    useState<{ count: number; productName: string } | null>(null);

  const [buildName, setBuildName] = useState<string>(() => {
    return localStorage.getItem('buildName') || '';
  });

  useEffect(() => {
    localStorage.setItem('skuHistory', JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    localStorage.setItem('buildName', buildName);
  }, [buildName]);

  const handleGenerate = (data: SkuFormData) => {
    const style = SKU_STYLES.find(s => s.name === data.skuStyle);
    if (!style) return;

    const entries: HistoryEntry[] = [];
    data.colors.forEach(color => {
      data.sizes.forEach(size => {
        let sku = style.format;
        sku = sku.replace('{BRAND}', slugify(data.brandName));
        sku = sku.replace('{COLLECTION}', slugify(data.collection));
        sku = sku.replace('{PROD}', slugify(data.productName));
        sku = sku.replace('{CAT}', slugify(data.category));
        sku = sku.replace('{SUBCAT}', slugify(data.subCategory));
        sku = sku.replace('{COLOR}', slugify(color));
        sku = sku.replace('{SIZE}', slugify(size));
        sku = sku.replace(/-+/g, '-').replace(/^-|-$/g, '');

        entries.push({
          id: `${Date.now()}-${color}-${size}-${Math.random()}`,
          sku,
          formData: data,
          variant: { color, size },
        });
      });
    });

    setHistory(prev => [...entries, ...prev]);
    setResult({ count: entries.length, productName: data.productName || 'product' });
  };

  const handleClearHistory = () => { setHistory([]); setResult(null); };
  const handleRemoveItem = (id: string) =>
    setHistory(prev => prev.filter(i => i.id !== id));

  return (
    <div className="bg-gray-950 text-gray-200 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <SkuForm onGenerate={handleGenerate} formData={formData} setFormData={setFormData} />
          </div>
          <div className="lg:col-span-1">
            <ResultsDisplay result={result} />
          </div>
        </div>

        {history.length > 0 && (
          <HistoryDisplay
            history={history}
            buildName={buildName}
            setBuildName={setBuildName}
            onClearHistory={handleClearHistory}
            onRemoveItem={handleRemoveItem}
          />
        )}
      </main>
    </div>
  );
}
