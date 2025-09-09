import React from 'react';
<tr>
<th className="p-2 font-normal">Image</th>
<th className="p-2 font-normal">SKU</th>
<th className="p-2 font-normal">Details</th>
<th className="p-2 font-normal text-right">Price</th>
<th className="p-2 font-normal text-right">Cost</th>
<th className="p-2 font-normal text-right">Profit</th>
<th className="p-2 font-normal text-right">Margin</th>
<th className="p-2 font-normal text-center">Actions</th>
</tr>
</thead>
<tbody>
{history.map(item => {
const costOfGoods = item.formData.costOfGoods || 0;
const shippingCost = item.formData.shippingCost || 0;
const stateTax = item.formData.stateTax || 0;
const federalTax = item.formData.federalTax || 0;
const sellingPrice = item.formData.sellingPrice || 0;
const totalCost = costOfGoods + shippingCost + stateTax + federalTax;
const netProfit = sellingPrice - totalCost;
const profitMargin = sellingPrice > 0 ? (netProfit / sellingPrice) * 100 : 0;


return (
<tr key={item.id} className="border-b border-gray-800 hover:bg-gray-800/50">
<td className="p-2">
<div className="w-10 h-10 bg-gray-800 rounded-md flex items-center justify-center">
{item.formData.imageUrl ? <img src={item.formData.imageUrl} alt="Product" className="w-full h-full object-cover rounded-md"/> : <ImageIcon className="w-5 h-5 text-gray-600"/>}
</div>
</td>
<td className="p-2 font-mono text-green-400">{item.sku}</td>
<td className="p-2">
<p className="font-medium text-gray-200">{item.formData.productName}</p>
<p className="text-xs text-gray-500">{item.variant.color} / {item.variant.size}</p>
</td>
<td className="p-2 text-right">${sellingPrice.toFixed(2)}</td>
<td className="p-2 text-right text-red-400/80">${totalCost.toFixed(2)}</td>
<td className={`p-2 text-right font-medium ${netProfit >= 0 ? 'text-green-400' : 'text-red-500'}`}>${netProfit.toFixed(2)}</td>
<td className="p-2 text-right">{profitMargin.toFixed(1)}%</td>
<td className="p-2 text-center">
<button onClick={() => onRemoveItem(item.id)} className="text-gray-500 hover:text-red-500 p-1"><Trash2Icon className="w-4 h-4"/></button>
</td>
</tr>
);
})}
</tbody>
</table>
</div>
</div>
);
};


export default HistoryDisplay;
