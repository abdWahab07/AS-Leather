import React from 'react';

interface PageHeaderProps {
  pretitle?: string;
  title: string;
  subtitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  pretitle = "THE COLLECTION", 
  title, 
  subtitle 
}) => {
  return (
    <div className="py-16 px-4" style={{ backgroundColor: '#ebe0d6' }}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-sm font-sans uppercase tracking-wider text-stone-700 mb-4">
          {pretitle}
        </h2>
        <h1 className="text-5xl md:text-6xl font-serif mb-6" style={{ color: '#5c3b23' }}>
          {title}
        </h1>
        <p className="text-base font-sans text-stone-700 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
