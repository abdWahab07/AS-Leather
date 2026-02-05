import React from 'react';
import Link from 'next/link';
import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  isWishlisted?: boolean;
  onWishlistToggle?: (id: string) => void;
  onAddToCart?: (id: string, event: React.MouseEvent) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  image,
  badge,
  isWishlisted = false,
  onWishlistToggle,
  onAddToCart,
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      {/* Product Image */}
      <Link href={`/products/${id}`}>
        <div className="relative aspect-square overflow-hidden bg-stone-50 cursor-pointer">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badge */}
          {badge && (
            <div className="absolute top-2 left-2 bg-stone-800 text-white text-xs px-2 py-1 rounded">
              {badge}
            </div>
          )}
        </div>
      </Link>
      
      {/* Action Buttons */}
      <div className="absolute top-2 right-2 flex flex-col gap-2">
        {/* Wishlist Button */}
        <button
          onClick={() => onWishlistToggle?.(id)}
          className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
        >
          {isWishlisted ? (
            <HeartSolidIcon className="w-4 h-4 text-red-500" />
          ) : (
            <HeartIcon className="w-4 h-4 text-stone-600 hover:text-red-500" />
          )}
        </button>
        
        {/* Add to Cart Button */}
        <button
          onClick={(e) => onAddToCart?.(id, e)}
          className="p-2 bg-stone-800 text-white rounded-full shadow-md hover:shadow-lg hover:bg-stone-700 transition-all"
        >
          <ShoppingBagIcon className="w-4 h-4" />
        </button>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <Link href={`/products/${id}`}>
          <h3 className="text-sm font-medium text-stone-900 mb-2 line-clamp-2 cursor-pointer hover:text-stone-700 transition-colors" style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}>
            {name}
          </h3>
        </Link>
        
        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-stone-900" style={{ fontFamily: 'var(--font-bodoni-moda)', color: '#5c3b23' }}>
            {formatPrice(price)}
          </span>
          {originalPrice && originalPrice > price && (
            <span className="text-sm text-stone-500 line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
