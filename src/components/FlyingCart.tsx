import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface FlyingCartProps {
  startRect: DOMRect;
  endRect: DOMRect;
  image: string;
  onComplete: () => void;
}

const FlyingCart: React.FC<FlyingCartProps> = ({ startRect, endRect, image, onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    console.log('FlyingCart mounted with:', { startRect, endRect, image });
    
    const timer = setTimeout(() => {
      console.log('FlyingCart animation completed');
      setIsVisible(false);
      onComplete();
    }, 1500); // Animation duration

    return () => clearTimeout(timer);
  }, [startRect, endRect, image, onComplete]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{
        x: startRect.left + startRect.width / 2 - 40,
        y: startRect.top + startRect.height / 2 - 40,
        scale: 1,
        opacity: 1,
      }}
      animate={{
        x: endRect.left + endRect.width / 2 - 40, // Center of cart icon
        y: endRect.top + endRect.height / 2 - 40,
        scale: 0.3,
        opacity: 0.8,
      }}
      transition={{
        type: 'spring',
        damping: 30,
        stiffness: 200,
        duration: 1.5,
      }}
      className="fixed left-0 top-0 pointer-events-none z-50"
      style={{
        width: 200,
        height: 200,
      }}
    >
      <div className="w-full h-full rounded-full overflow-hidden shadow-lg border-2 border-white">
        <img
          src={image}
          alt="Flying product"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
};

export default FlyingCart;
