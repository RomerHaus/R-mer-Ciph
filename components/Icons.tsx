import React from 'react';

// General UI Icons
export const RoemerCiphIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="18" fontFamily="'Fira Code', monospace" fontWeight="600">
      {'{ r }'}
    </text>
  </svg>
);
export const Wand2Icon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9.06 2.44 2 2 2-2M1.16 12.87l2-2 2 2"/><path d="M12.28 12.28 14 14l.34.34a2 2 0 0 0 2.83-2.83l-.34-.34L14 11.72"/><path d="M14.28 11.28 12 9l-.34-.34a2 2 0 0 0-2.83 2.83l.34.34L11.72 14"/><path d="m2.44 9.06 2-2 2 2M12.87 1.16l-2 2-2-2"/><path d="M11.28 14.28 9 12l-.34-.34a2 2 0 0 0-2.83 2.83l.34.34L9.72 17"/><path d="M17 9.72l.34.34a2 2 0 0 0 2.83-2.83l-.34-.34L17.28 4"/></svg>
);
export const RefreshCwIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>
);
export const ImageIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
);
export const DollarSignIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
);
export const Trash2Icon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
);
export const FileDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22H9a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M12 18v-6"/><path d="m15 15-3 3-3-3"/></svg>
);
export const CopyIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);
export const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

// New icons
export const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 3l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4zM19 11l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z"/>
  </svg>
);
export const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/>
  </svg>
);

// Brand Icons
const iconProps = { width: "100%", height: "100%", fill: "currentColor", viewBox: "0 0 32 32" } as const;
export const GenericBrandIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>
  </svg>
);
export const ShopifyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement('svg', { ...props, ...iconProps, children: [React.createElement('path', { key: 1, d: 'M13.295 7.21a1 1 0 0 1 1.41 1.41l-4.137 4.148a2.5 2.5 0 0 1-3.535 0L3 10.04a1 1 0 0 1 1.414-1.414l3.125 3.125a.5.5 0 0 0 .707 0l5.05-5.05z M20.942 3.018a1 1 0 0 1-1.414 1.414l-5.69 5.69a.5.5 0 0 0 0 .707l2.828 2.828a2.5 2.5 0 0 1 0 3.535l-4.14 4.14a1 1 0 0 1-1.415-1.414l4.14-4.14a.5.5 0 0 0 0-.707L15.42 12.28a2.5 2.5 0 0 1 0-3.535l5.522-5.522z' })] });
export const AmazonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement('svg', { ...props, ...iconProps, children: [React.createElement('path', { key: 1, d: 'M18.84 21.32c-1.56 1.08-3.6.84-4.8-.48l-1.08-.96c-.36-.36-.84-.48-1.32-.36l-1.08.36c-2.04.6-4.08-.36-5.04-2.16s-.36-4.08 1.44-5.4l.24-.12c.36-.24.6-.6.6-.96v-1.2c0-1.08.84-2.04 2.04-2.04h1.2c.36 0 .72-.12.96-.36l.12-.24c1.32-1.8 3.72-2.16 5.4-1.44s2.64 3 2.04 5.04l-.36 1.08c-.12.48 0 .96.36 1.32l.96 1.08c1.32 1.2 1.56 3.24.48 4.8s-3.24 1.56-4.8.48zm-1.08-9.96c.6-1.08.24-2.4-.84-3s-2.4-.24-3 .84-.24 2.4.84 3 2.4.24 3-.84z' })] });
export const PinterestIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement('svg', { ...props, ...iconProps, children: [React.createElement('path', { key: 1, d: 'M13.235 3.522c-3.69 0-6.685 2.996-6.685 6.685 0 1.62.58 3.1 1.55 4.28-.15.54-.53 2.05-.63 2.45-.1.38.07.78.4 1 .23.15.5.15.7.02 2.8-1.78 4.67-4.43 4.67-7.75 0-2.43-1.98-4.4-4.4-4.4zm-1.12 6.13c-.62 0-1.12-.5-1.12-1.12s.5-1.12 1.12-1.12 1.12.5 1.12 1.12-.5 1.12-1.12 1.12zm2.23 0c-.62 0-1.12-.5-1.12-1.12s.5-1.12 1.12-1.12 1.12.5 1.12 1.12-.5 1.12-1.12 1.12zm-3.35-2.23c-.62 0-1.12-.5-1.12-1.12s.5-1.12 1.12-1.12 1.12.5 1.12 1.12-.5 1.12-1.12 1.12zm2.23 0c-.62 0-1.12-.5-1.12-1.12s.5-1.12 1.12-1.12 1.12.5 1.12 1.12-.5 1.12-1.12 1.12z' })] });
export const TumiIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement('svg', { ...props, ...iconProps, children: [React.createElement('path', { key: 1, d: 'M4 8h4v12H4zM12 8h4v12h-4zM20 8h4v12h-4z' })] });
export const WixIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement('svg', { ...props, ...iconProps, children: [React.createElement('path', { key: 1, d: 'M6 4l6 14 6-14M12 18v-4' })] });
export const SquareSpaceIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement('svg', { ...props, ...iconProps, children: [React.createElement('path', { key: 1, d: 'M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z' })] });
export const TiktokIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement('svg', { ...props, ...iconProps, children: [React.createElement('path', { key: 1, d: 'M14 4h4v14c0 1.1-.9 2-2 2s-2-.9-2-2V4zm-6 4h4v12h-4z' })] });
export const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement('svg', { ...props, ...iconProps, children: [React.createElement('path', { key: 1, d: 'M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm6-2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z' })] });
export const EbayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement('svg', { ...props, ...iconProps, children: [React.createElement('path', { key: 1, d: 'M4 8h20v2H4zM4 14h20v2H4z' })] });
export const EtsyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement('svg', { ...props, ...iconProps, children: [React.createElement('path', { key: 1, d: 'M12 4L2 12h5v8h10v-8h5L12 4z' })] });
