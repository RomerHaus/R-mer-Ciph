import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SkuForm from './components/SkuForm';
import ResultsDisplay from './components/ResultsDisplay';
import HistoryDisplay from './components/HistoryDisplay';
import { SkuFormData, HistoryEntry, VariantData } from './types';
import { SKU\_STYLES } from './constants';

const App: React.FC = () => {
const \[formData, setFormData] = useState\<SkuFormData | null>(null);
const \[generatedHistory, setGeneratedHistory] = useState\<HistoryEntry\[]>(\[]);
const \[buildName, setBuildName] = useState('');
const \[generationResult, setGenerationResult] = useState<{ count: number; productName: string } | null>(null);

const handleGenerate = (data: SkuFormData) => {
setFormData(data);
const skuStyle = SKU\_STYLES.find(s => s.name === data.skuStyle);
if (!skuStyle) return;

```
const variants: VariantData[] = [];
const colors = data.colors.length > 0 ? data.colors : ['N/A'];
const sizes = data.sizes.length > 0 ? data.sizes : ['N/A'];

for (const color of colors) {
  for (const size of sizes) {
    variants.push({ color, size });
  }
}

const newHistoryEntries: HistoryEntry[] = variants.map(variant => {
  const skuFormat = skuStyle.format;
  const sku = skuFormat
    .replace(/{BRAND}/g, data.brandName?.substring(0, 3).toUpperCase() || 'BRD')
    .replace(/{COLLECTION}/g, data.collection?.substring(0, 3).toUpperCase() || 'COL')
    .replace(/{PROD}/g, data.productName?.substring(0, 3).toUpperCase() || 'PRO')
    .replace(/{CAT}/g, data.category?.substring(0, 3).toUpperCase() || 'CAT')
    .replace(/{SUBCAT}/g, data.subCategory?.substring(0, 3).toUpperCase() || 'SUB')
    .replace(/{MODEL}/g, data.variantModel?.substring(0, 3).toUpperCase() || 'MDL')
    .replace(/{DETAIL}/g, data.customDetail?.substring(0, 3).toUpperCase() || 'DET')
    .replace(/{COLOR}/g, variant.color.substring(0, 3).toUpperCase())
    .replace(/{SIZE}/g, variant.size.charAt(0).toUpperCase());

  return {
    id: crypto.randomUUID(),
    sku,
    formData: data,
    variant,
  };
});

setGeneratedHistory(prev => [...newHistoryEntries, ...prev]);
setGenerationResult({ count: newHistoryEntries.length, productName: data.productName || 'product' });
```

};

const handleClearHistory = () => setGeneratedHistory(\[]);
const handleRemoveHistoryItem = (id: string) => setGeneratedHistory(prev => prev.filter(item => item.id !== id));

useEffect(() => {
if (generationResult) {
const timer = setTimeout(() => setGenerationResult(null), 5000);
return () => clearTimeout(timer);
}
}, \[generationResult]);

return ( <div className="bg-gray-950 min-h-screen text-gray-300 font-sans"> <Header /> <main className="container mx-auto px-4 py-8"> <div className="grid grid-cols-1 lg:grid-cols-5 gap-8"> <div className="lg:col-span-3"> <SkuForm onGenerate={handleGenerate} /> </div> <div className="lg:col-span-2"> <ResultsDisplay result={generationResult} /> </div> </div>
{generatedHistory.length > 0 && ( <HistoryDisplay
         history={generatedHistory}
         buildName={buildName}
         setBuildName={setBuildName}
         onClearHistory={handleClearHistory}
         onRemoveItem={handleRemoveHistoryItem}
       />
)} </main> <footer className="text-center py-4 text-xs text-gray-600 border-t border-green-500/20 mt-8">
Römer-Ciph v1.0 - The Hidden Layer That Names The Build </footer> </div>
);
};

export default App;
