import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SkuForm from './components/SkuForm';
import ResultsDisplay from './components/ResultsDisplay';
import HistoryDisplay from './components/HistoryDisplay';
import { SkuFormData, HistoryEntry, VariantData } from './types';
import { SKU\_STYLES } from './constants';

const App: React.FC = () => {
const \[generatedHistory, setGeneratedHistory] = useState\<HistoryEntry\[]>(\[]);
const \[buildName, setBuildName] = useState('');
const \[generationResult, setGenerationResult] = useState<{ count: number; productName: string } | null>(null);

const handleGenerate = (data: SkuFormData) => {
const style = SKU\_STYLES.find(s => s.name === data.skuStyle);
if (!style) return;

```
const colors = data.colors.length ? data.colors : ['N/A'];
const sizes  = data.sizes.length  ? data.sizes  : ['N/A'];

const entries: HistoryEntry[] = [];
for (const color of colors) {
  for (const size of sizes) {
    const sku = style.format
      .replace(/\{BRAND\}/g, (data.brandName   || 'BRD').slice(0,3).toUpperCase())
      .replace(/\{COLLECTION\}/g,(data.collection || 'COL').slice(0,3).toUpperCase())
      .replace(/\{PROD\}/g,  (data.productName || 'PRO').slice(0,3).toUpperCase())
      .replace(/\{CAT\}/g,   (data.category    || 'CAT').slice(0,3).toUpperCase())
      .replace(/\{SUBCAT\}/g,(data.subCategory || 'SUB').slice(0,3).toUpperCase())
      .replace(/\{MODEL\}/g, (data.variantModel|| 'MDL').slice(0,3).toUpperCase())
      .replace(/\{DETAIL\}/g,(data.customDetail|| 'DET').slice(0,3).toUpperCase())
      .replace(/\{COLOR\}/g, color.slice(0,3).toUpperCase())
      .replace(/\{SIZE\}/g,  size.charAt(0).toUpperCase());
    entries.push({ id: crypto.randomUUID(), sku, formData: data, variant: { color, size } as VariantData });
  }
}

setGeneratedHistory(prev => [...entries, ...prev]);
setGenerationResult({ count: entries.length, productName: data.productName || 'product' });
```

};

const handleClearHistory = () => setGeneratedHistory(\[]);
const handleRemoveHistoryItem = (id: string) => setGeneratedHistory(prev => prev.filter(i => i.id !== id));

useEffect(() => {
if (!generationResult) return;
const t = setTimeout(() => setGenerationResult(null), 5000);
return () => clearTimeout(t);
}, \[generationResult]);

return ( <div className="bg-gray-950 min-h-screen text-gray-300"> <Header /> <main className="container mx-auto px-4 py-8"> <div className="grid grid-cols-1 lg:grid-cols-5 gap-8"> <div className="lg:col-span-3"><SkuForm onGenerate={handleGenerate} formData={formData} setFormData={setFormData} /></div> <div className="lg:col-span-2"><ResultsDisplay result={generationResult} /></div> </div>
{generatedHistory.length > 0 && ( <HistoryDisplay
         history={generatedHistory}
         buildName={buildName}
         setBuildName={setBuildName}
         onClearHistory={handleClearHistory}
         onRemoveItem={handleRemoveHistoryItem}
       />
)} </main> <footer className="text-center py-4 text-xs text-gray-600 border-t border-green-500/20 mt-8">
Roemer‑Ciph v1.0 — The Hidden Layer That Names The Build </footer> </div>
);
};

export default App;
