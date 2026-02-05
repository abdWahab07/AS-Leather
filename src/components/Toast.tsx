import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Auto close after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -100, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.8 }}
      transition={{ type: 'spring', damping: 25, stiffness: 400 }}
      className="fixed top-20 right-4 z-50 flex items-center space-x-3 bg-white px-6 py-4 rounded-lg shadow-xl border border-stone-200 min-w-[300px]"
    >
      <div className="flex-shrink-0">
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircleIcon className="w-6 h-6 text-green-600" />
        </div>
      </div>
      
      <div className="flex-1">
        <p className="text-sm font-medium text-stone-900" style={{ fontFamily: 'var(--font-bodoni-moda)' }}>
          {message}
        </p>
        <p className="text-xs text-stone-500 mt-1">
          Added to your cart
        </p>
      </div>
      
      <button
        onClick={onClose}
        className="flex-shrink-0 p-1 hover:bg-stone-100 rounded-full transition-colors"
      >
        <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </motion.div>
  );
};

export default Toast;
