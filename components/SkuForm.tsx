import React, { useState, useRef, useEffect } from 'react';
<p className="text-xs text-gray-500 mt-1 font-mono">{style?.description}</p>
</div>
</div>


<div>
<h3 className="text-lg font-semibold text-gray-200 mb-2">2. Product Details</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<InputField id="brandName" label="Brand Name" value={formData.brandName || ''} onChange={onChange} required={isReq('brandName')} />
<InputField id="collection" label="Collection" value={formData.collection || ''} onChange={onChange} required={isReq('collection')} />
<InputField id="productName" label="Product Name" value={formData.productName || ''} onChange={onChange} required={isReq('productName')} />
<InputField id="category" label="Product Type" value={formData.category || ''} onChange={onChange} required={isReq('category')} placeholder="e.g., Apparel" />
<InputField id="subCategory" label="Sub-Category (Optional)" value={formData.subCategory || ''} onChange={onChange} required={isReq('subCategory')} placeholder="e.g., T-Shirts" />
<InputField id="variantModel" label="Variant/Model (Optional)" value={formData.variantModel || ''} onChange={onChange} required={isReq('variantModel')} placeholder="e.g., Cotton, V-Neck" />
<InputField id="customDetail" label="Custom Detail (Optional)" value={formData.customDetail || ''} onChange={onChange} required={isReq('customDetail')} placeholder="e.g., Limited_Edition" />
<InputField id="productUrl" label="Product URL (Optional)" value={formData.productUrl || ''} onChange={onChange} placeholder="https://..." type="url" />
<InputField id="imageUrl" label="Image URL (Optional)" value={formData.imageUrl || ''} onChange={onChange} placeholder="https://.../image.jpg" type="url" />
<MultiSelectDropdown label="Colors" options={C.COLORS} selected={formData.colors} onChange={(s) => set('colors', s)} />
<MultiSelectDropdown label="Sizes" options={C.SIZES} selected={formData.sizes} onChange={(s) => set('sizes', s)} />
</div>
<p className="text-xs text-gray-500 mt-2">Tip: If both an uploaded image and an Image URL are provided, the Image URL preview is used.</p>
</div>


<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
<div>
<h3 className="text-lg font-semibold text-gray-200 mb-2 flex items-center"><ImageIcon className="w-5 h-5 mr-2" />Product Image</h3>
<input type="file" id="imageUpload" accept="image/*" onChange={onImg} className="hidden" />
<label htmlFor="imageUpload" className="w-full h-40 flex items-center justify-center border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-green-500 transition-colors">
{imagePreview ? <img src={imagePreview} alt="Preview" className="h-full w-full object-cover rounded-md" /> : <span className="text-gray-400 text-sm">Click to upload</span>}
</label>
</div>
<div>
<h3 className="text-lg font-semibold text-gray-200 mb-2 flex items-center"><DollarSignIcon className="w-5 h-5 mr-2" />Financials</h3>
<div className="space-y-3">
<InputField id="costOfGoods" label="Manufacturing Cost ($)" type="number" step="0.01" min="0" value={formData.costOfGoods?.toString() || ''} onChange={onChange} />
<InputField id="shippingCost" label="Shipping Cost ($)" type="number" step="0.01" min="0" value={formData.shippingCost?.toString() || ''} onChange={onChange} />
<InputField id="stateTax" label="State Tax ($)" type="number" step="0.01" min="0" value={formData.stateTax?.toString() || ''} onChange={onChange} />
<InputField id="federalTax" label="Federal Tax ($)" type="number" step="0.01" min="0" value={formData.federalTax?.toString() || ''} onChange={onChange} />
<InputField id="sellingPrice" label="Selling Price ($)" type="number" step="0.01" min="0" value={formData.sellingPrice?.toString() || ''} onChange={onChange} />
</div>
</div>
</div>
</div>
<div className="bg-gray-950/50 p-4 flex justify-end space-x-3 border-t border-green-500/30">
<button type="button" onClick={clear} className="px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700/50 hover:bg-gray-700 rounded-md flex items-center space-x-2">
<RefreshCwIcon className="w-4 h-4" /><span>Clear</span>
</button>
<button type="submit" className="px-6 py-2 text-sm font-medium text-gray-900 bg-green-400 hover:bg-green-500 rounded-md flex items-center space-x-2">
<Wand2Icon className="w-4 h-4" />
<SparklesIcon className="w-4 h-4" />
<span>Generate</span>
</button>
</div>
</form>
);
};


export default SkuForm;
