import React, { useState } from 'react';

interface ProductFiltersProps {
  onFilterChange: (category: string) => void;
  onSortChange: (sort: string) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ onFilterChange, onSortChange }) => {
  const [activeFilter, setActiveFilter] = useState('All Products');
  const [sortBy, setSortBy] = useState('Featured');

  const categories = ['All', 'Bags', 'Wallets', 'Accessories'];
  const sortOptions = ['Featured', 'Price: Low', 'Price: High', 'New'];

  const handleFilterClick = (category: string) => {
    // Convert short names back to full names for the parent component
    const fullCategory = category === 'All' ? 'All Products' : category;
    setActiveFilter(fullCategory);
    onFilterChange(fullCategory);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSortBy(value);
    onSortChange(value);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-10 bg-white">
      {/* Mobile Layout - Stacked */}
      <div className="block lg:hidden space-y-4">
        {/* Filter Buttons - Mobile */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const fullCategory = category === 'All' ? 'All Products' : category;
            return (
              <button
                key={category}
                onClick={() => handleFilterClick(category)}
                className={`px-3 py-2 text-xs font-medium transition-colors flex-1 min-w-[80px] ${
                  activeFilter === fullCategory
                    ? 'bg-stone-800 text-white'
                    : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Sort Dropdown - Mobile */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-stone-600 whitespace-nowrap min-w-[60px]">Sort:</span>
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="flex-1 px-3 py-2 text-xs border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-500 bg-white"
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Desktop Layout - Side by Side */}
      <div className="hidden lg:flex justify-between items-center gap-4">
        {/* Filter Buttons - Desktop */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const fullCategory = category === 'All' ? 'All Products' : category;
            return (
              <button
                key={category}
                onClick={() => handleFilterClick(category)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeFilter === fullCategory
                    ? 'bg-stone-800 text-white'
                    : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Sort Dropdown - Desktop */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-stone-600 whitespace-nowrap">Sort by:</span>
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="px-3 py-2 text-sm border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-500 bg-white min-w-[140px]"
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
