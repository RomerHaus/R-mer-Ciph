import React, { useState, useRef, useEffect } from 'react';
import { SkuFormData } from '../types';
import { ECOMMERCE_PLATFORMS, SKU_STYLES, COLORS, SIZES } from '../constants';
import { Wand2Icon, RefreshCwIcon, ImageIcon, DollarSignIcon, ChevronDownIcon } from './Icons';

interface SkuFormProps {
  onGenerate: (data: SkuFormData) => void;
}

const InputField: React.FC<{ id: string, label: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, required?: boolean, placeholder?: string, type?: string, step?: string, min?: string }> = 
  ({ id, label, value, onChange, required = false, placeholder = '', type = 'text', ...props }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-green-300/80 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-gray-950/50 border border-gray-700 rounded-md py-2 px-3 text-gray-200 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
      {...props}
    />
  </div>
);

const MultiSelectDropdown: React.FC<{ options: { group: string; items: string[] }[] | string[], selected: string[], onChange: (selected: string[]) => void, label: string }> = ({ options, selected, onChange, label }) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [ref]);

    const handleSelect = (option: string) => {
        const newSelected = selected.includes(option)
            ? selected.filter(item => item !== option)
            : [...selected, option];
        onChange(newSelected);
    };

    const isGrouped = (opts: any): opts is { group: string; items: string[] }[] => typeof opts[0] === 'object';

    return (
        <div className="relative" ref={ref}>
            <label className="block text-sm font-medium text-green-300/80 mb-1">{label}</label>
            <button type="button" onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center bg-gray-950/50 border border-gray-700 rounded-md py-2 px-3 text-left text-gray-200">
                <span className="truncate">{selected.join(', ') || `Select ${label.toLowerCase()}...`}</span>
                <ChevronDownIcon className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-gray-900 border border-gray-700 rounded-md shadow-lg max-h-60 overflow-y-auto">
                    {isGrouped(options) ? options.map(group => (
                        <div key={group.group}>
                            <h3 className="text-xs font-bold text-green-400/70 px-3 py-2">{group.group}</h3>
                            {group.items.map(item => (
                                <label key={item} className="flex items-center px-3 py-1.5 cursor-pointer hover:bg-green-500/10">
                                    <input type="checkbox" checked={selected.includes(item)} onChange={() => handleSelect(item)} className="h-4 w-4 rounded bg-gray-800 border-gray-600 text-green-500 focus:ring-green-600" />
                                    <span className="ml-3 text-sm text-gray-300">{item}</span>
                                </label>
                            ))}
                        </div>
                    )) : options.map(item => (
                         <label key={item as string} className="flex items-center px-3 py-1.5 cursor-pointer hover:bg-green-500/10">
                            <input type="checkbox" checked={selected.includes(item as string)} onChange={() => handleSelect(item as string)} className="h-4 w-4 rounded bg-gray-800 border-gray-600 text-green-500 focus:ring-green-600" />
                            <span className="ml-3 text-sm text-gray-300">{item}</span>
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
};


const SkuForm: React.FC<SkuFormProps> = ({ onGenerate }) => {
  const [formData, setFormData] = useState<SkuFormData>({
    platform: ECOMMERCE_PLATFORMS[0].name,
    skuStyle: SKU_STYLES[0].name,
    colors: [],
    sizes: [],
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  const activeSkuStyle = SKU_STYLES.find(s => s.name === formData.skuStyle);
  const isRequired = (field: keyof SkuFormData) => activeSkuStyle?.required.includes(field as any);

  const handleFormDataChange = (field: keyof SkuFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const isNumber = type === 'number';
    handleFormDataChange(name as keyof SkuFormData, isNumber ? (value === '' ? undefined : parseFloat(value)) : value);
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImagePreview(base64String);
        handleFormDataChange('imageUrl', base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(formData);
  };

  const handleClear = () => {
    setFormData({
        platform: ECOMMERCE_PLATFORMS[0].name,
        skuStyle: SKU_STYLES[0].name,
        colors: [],
        sizes: [],
    });
    setImagePreview(null);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900/70 border border-green-500/30 rounded-lg">
      <div className="p-6 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-200 mb-2">1. Select Platform & SKU Style</h3>
           <div className="flex items-center border-b border-green-500/30 mb-4">
            {ECOMMERCE_PLATFORMS.map((p) => (
              <button
                key={p.name}
                type="button"
                onClick={() => handleFormDataChange('platform', p.name)}
                className={`flex-1 p-3 text-xs md:text-sm font-medium transition-colors relative ${
                  formData.platform === p.name
                    ? 'text-green-400'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {p.name}
                {formData.platform === p.name && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-400"></div>
                )}
              </button>
            ))}
          </div>
          <div>
            <label htmlFor="skuStyle" className="block text-sm font-medium text-green-300/80 mb-1">SKU Style</label>
            <select name="skuStyle" id="skuStyle" value={formData.skuStyle} onChange={handleInputChange} className="w-full bg-gray-950/50 border border-gray-700 rounded-md py-2 px-3 text-gray-200">
              {SKU_STYLES.map(style => <option key={style.name} value={style.name}>{style.name}</option>)}
            </select>
            <p className="text-xs text-gray-500 mt-1 font-mono">{activeSkuStyle?.description}</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-200 mb-2">2. Product Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField id="brandName" label="Brand Name" value={formData.brandName || ''} onChange={handleInputChange} required={isRequired('brandName')} />
            <InputField id="collection" label="Collection" value={formData.collection || ''} onChange={handleInputChange} required={isRequired('collection')} />
            <InputField id="productName" label="Product Name" value={formData.productName || ''} onChange={handleInputChange} required={isRequired('productName')} />
            <InputField id="category" label="Product Type" value={formData.category || ''} onChange={handleInputChange} required={isRequired('category')} placeholder="e.g., Apparel" />
            <InputField id="subCategory" label="Sub-Category (Optional)" value={formData.subCategory || ''} onChange={handleInputChange} required={isRequired('subCategory')} placeholder="e.g., T-Shirts" />
            <InputField id="variantModel" label="Variant/Model (Optional)" value={formData.variantModel || ''} onChange={handleInputChange} required={isRequired('variantModel')} placeholder="e.g., Cotton, V-Neck" />
            <InputField id="customDetail" label="Custom Detail (Optional)" value={formData.customDetail || ''} onChange={handleInputChange} required={isRequired('customDetail')} placeholder="e.g., Limited_Edition" />
            <InputField id="productUrl" label="Product URL (Optional)" value={formData.productUrl || ''} onChange={handleInputChange} placeholder="https://..." />
            <MultiSelectDropdown label="Colors" options={COLORS} selected={formData.colors} onChange={(s) => handleFormDataChange('colors', s)} />
            <MultiSelectDropdown label="Sizes" options={SIZES} selected={formData.sizes} onChange={(s) => handleFormDataChange('sizes', s)} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-2 flex items-center"><ImageIcon className="w-5 h-5 mr-2" />Product Image</h3>
              <input type="file" id="imageUpload" accept="image/*" onChange={handleImageChange} className="hidden" />
              <label htmlFor="imageUpload" className="w-full h-40 flex items-center justify-center border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-green-500 transition-colors">
                  {imagePreview ? <img src={imagePreview} alt="Preview" className="h-full w-full object-cover rounded-md" /> : <span className="text-gray-400 text-sm">Click to upload</span>}
              </label>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-2 flex items-center"><DollarSignIcon className="w-5 h-5 mr-2" />Financials</h3>
              <div className="space-y-3">
                <InputField id="costOfGoods" label="Manufacturing Cost ($)" type="number" step="0.01" min="0" value={formData.costOfGoods?.toString() || ''} onChange={handleInputChange} />
                <InputField id="shippingCost" label="Shipping Cost ($)" type="number" step="0.01" min="0" value={formData.shippingCost?.toString() || ''} onChange={handleInputChange} />
                <InputField id="stateTax" label="State Tax ($)" type="number" step="0.01" min="0" value={formData.stateTax?.toString() || ''} onChange={handleInputChange} />
                <InputField id="federalTax" label="Federal Tax ($)" type="number" step="0.01" min="0" value={formData.federalTax?.toString() || ''} onChange={handleInputChange} />
                <InputField id="sellingPrice" label="Selling Price ($)" type="number" step="0.01" min="0" value={formData.sellingPrice?.toString() || ''} onChange={handleInputChange} />
              </div>
            </div>
        </div>
      </div>
      <div className="bg-gray-950/50 p-4 flex justify-end space-x-3 border-t border-green-500/30">
        <button type="button" onClick={handleClear} className="px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700/50 hover:bg-gray-700 rounded-md flex items-center space-x-2">
            <RefreshCwIcon className="w-4 h-4" /><span>Clear</span>
        </button>
        <button type="submit" className="px-6 py-2 text-sm font-medium text-gray-900 bg-green-400 hover:bg-green-500 rounded-md flex items-center space-x-2">
            <Wand2Icon className="w-4 h-4" /><span>Generate</span>
        </button>
      </div>
    </form>
  );
};

export default SkuForm;
