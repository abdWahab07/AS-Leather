import React from 'react';
import { motion } from 'framer-motion';

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
        <motion.h2 
          className="text-sm font-sans uppercase tracking-wider text-stone-700 mb-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {pretitle}
        </motion.h2>
        <motion.h1 
          className="text-5xl md:text-6xl font-serif mb-6" 
          style={{ color: '#5c3b23' }}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {title}
        </motion.h1>
        <motion.p 
          className="text-base font-sans text-stone-700 max-w-3xl mx-auto leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
};

export default PageHeader;
