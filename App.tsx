import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SkuForm from './components/SkuForm';
import ResultsDisplay from './components/ResultsDisplay';
import HistoryDisplay from './components/HistoryDisplay';
import type { SkuFormData, HistoryEntry } from './types';
import * as C from './constants';


function App() {
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


const [result, setResult] = useState<{ count: number; productName: string } | null>(null);
const [buildName, setBuildName] = useState<string>(() => localStorage.getItem('buildName') || '');


useEffect(() => { localStorage.setItem('skuHistory', JSON.stringify(history)); }, [history]);
useEffect(() => { localStorage.setItem('buildName', buildName); }, [buildName]);


export default App;
