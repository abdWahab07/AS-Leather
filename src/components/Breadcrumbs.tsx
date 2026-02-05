import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <div className="py-4 px-4" style={{ backgroundColor: '#ebe0d6' }}>
      <div className="max-w-6xl mx-auto">
        <nav className="flex items-center space-x-2 text-sm">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <span className="text-stone-500">/</span>
              )}
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-stone-600 hover:text-stone-900 transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="text-stone-900 font-medium">{item.name}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumbs;
