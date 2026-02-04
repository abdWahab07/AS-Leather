"use client";

import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import ProductFilters from '@/components/ProductFilters';
import ProductCard from '@/components/ProductCard';

// Mock product data
const mockProducts = [
  {
    id: '1',
    name: 'Classic Leather Briefcase',
    price: 299,
    originalPrice: 399,
    image: '/Products/1.jpeg',
    badge: 'Sale',
  },
  {
    id: '2',
    name: 'Premium Leather Backpack',
    price: 249,
    image: '/Products/2.jpeg',
    badge: 'New',
  },
  {
    id: '3',
    name: 'Executive Leather Portfolio',
    price: 189,
    image: '/Products/3.jpeg',
  },
  {
    id: '4',
    name: 'Vintage Leather Messenger Bag',
    price: 329,
    originalPrice: 429,
    image: '/Products/4.jpeg',
    badge: 'Sale',
  },
  {
    id: '5',
    name: 'Slim Leather Wallet',
    price: 89,
    image: '/Products/5.jpeg',
  },
  {
    id: '6',
    name: 'Leather Travel Duffel',
    price: 449,
    image: '/Products/1.jpeg',
    badge: 'Limited',
  },
];

const ProductsPage: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [wishlistedItems, setWishlistedItems] = useState<Set<string>>(new Set());

  const handleFilterChange = (category: string) => {
    if (category === 'All Products') {
      setFilteredProducts(mockProducts);
    } else {
      // Filter logic based on category
      const filtered = mockProducts.filter(product => {
        if (category === 'Bags') return product.name.toLowerCase().includes('bag') || product.name.toLowerCase().includes('briefcase') || product.name.toLowerCase().includes('backpack') || product.name.toLowerCase().includes('messenger') || product.name.toLowerCase().includes('duffel');
        if (category === 'Wallets') return product.name.toLowerCase().includes('wallet');
        if (category === 'Accessories') return product.name.toLowerCase().includes('portfolio');
        return true;
      });
      setFilteredProducts(filtered);
    }
  };

  const handleSortChange = (sort: string) => {
    const sorted = [...filteredProducts];
    switch (sort) {
      case 'Price: Low to High':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'Price: High to Low':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'New Arrivals':
        sorted.sort((a, b) => (a.badge === 'New' ? -1 : b.badge === 'New' ? 1 : 0));
        break;
      default: // Featured
        // Keep original order or implement featured logic
        break;
    }
    setFilteredProducts(sorted);
  };

  const handleWishlistToggle = (productId: string) => {
    setWishlistedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  return (
    <div className="pt-16 bg-white">
      <PageHeader
        pretitle="THE COLLECTION"
        title="Our Products"
        subtitle="Discover our range of handcrafted leather bags, each designed for the modern professional"
      />
      
      <ProductFilters
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />
      
      {/* Products Grid */}
      <div className="px-30 pb-16 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              isWishlisted={wishlistedItems.has(product.id)}
              onWishlistToggle={handleWishlistToggle}
            />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-stone-600 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
