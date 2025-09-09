import React, { useState, useEffect } from 'react';
.replace(/{PROD}/g, (data.productName||'PRO').slice(0,3).toUpperCase())
.replace(/{CAT}/g, (data.category||'CAT').slice(0,3).toUpperCase())
.replace(/{SUBCAT}/g, (data.subCategory||'SUB').slice(0,3).toUpperCase())
.replace(/{MODEL}/g, (data.variantModel||'MDL').slice(0,3).toUpperCase())
.replace(/{DETAIL}/g, (data.customDetail||'DET').slice(0,3).toUpperCase())
.replace(/{COLOR}/g, variant.color.slice(0,3).toUpperCase())
.replace(/{SIZE}/g, variant.size.charAt(0).toUpperCase());


return { id: crypto.randomUUID(), sku, formData: data, variant };
});


setGeneratedHistory(prev => [...newHistoryEntries, ...prev]);
setGenerationResult({ count: newHistoryEntries.length, productName: data.productName || 'product' });
};


const handleClearHistory = () => setGeneratedHistory([]);
const handleRemoveHistoryItem = (id: string) => setGeneratedHistory(prev => prev.filter(i => i.id !== id));


useEffect(() => {
if (!generationResult) return;
const t = setTimeout(() => setGenerationResult(null), 5000);
return () => clearTimeout(t);
}, [generationResult]);


return (
<div className="bg-gray-950 min-h-screen text-gray-300">
<Header />
<main className="container mx-auto px-4 py-8">
<div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
<div className="lg:col-span-3"><SkuForm onGenerate={handleGenerate} /></div>
<div className="lg:col-span-2"><ResultsDisplay result={generationResult} /></div>
</div>
{generatedHistory.length > 0 && (
<HistoryDisplay
history={generatedHistory}
buildName={buildName}
setBuildName={setBuildName}
onClearHistory={handleClearHistory}
onRemoveItem={handleRemoveHistoryItem}
/>
)}
</main>
<footer className="text-center py-4 text-xs text-gray-600 border-t border-green-500/20 mt-8">
Römer-Ciph v1.0 — The Hidden Layer That Names The Build
</footer>
</div>
);
};


export default App;
