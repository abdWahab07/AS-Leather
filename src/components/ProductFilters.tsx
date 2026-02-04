import React, { useState } from 'react';

interface ProductFiltersProps {
  onFilterChange: (category: string) => void;
  onSortChange: (sort: string) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ onFilterChange, onSortChange }) => {
  const [activeFilter, setActiveFilter] = useState('All Products');
  const [sortBy, setSortBy] = useState('Featured');

  const categories = ['All Products', 'Bags', 'Wallets', 'Accessories'];
  const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'New Arrivals'];

  const handleFilterClick = (category: string) => {
    setActiveFilter(category);
    onFilterChange(category);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSortBy(value);
    onSortChange(value);
  };

  return (
    <div className="px-30 py-10 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterClick(category)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeFilter === category
                  ? 'bg-stone-800 text-white'
                  : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-stone-600">Sort by:</span>
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="px-3 py-2 text-sm border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-500"
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
