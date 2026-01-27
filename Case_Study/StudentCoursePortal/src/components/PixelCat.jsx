import React from 'react';
import { motion } from 'framer-motion';

const PixelCat = ({ size = 60, animate = false, style = {} }) => {
  return (
    <motion.div
      style={{
        position: 'relative',
        width: size,
        height: size,
        ...style
      }}
    >
      {/* Cat Body - Pink */}
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        style={{ imageRendering: 'pixelated' }}
      >
        {/* Main body */}
        <rect x="25" y="35" width="50" height="45" fill="#FFB6C1" stroke="#000" strokeWidth="3"/>
        
        {/* Left ear */}
        <polygon points="25,35 25,15 40,35" fill="#FFB6C1" stroke="#000" strokeWidth="3"/>
        <polygon points="28,32 28,22 36,32" fill="#FF69B4"/>
        
        {/* Right ear */}
        <polygon points="75,35 75,15 60,35" fill="#FFB6C1" stroke="#000" strokeWidth="3"/>
        <polygon points="72,32 72,22 64,32" fill="#FF69B4"/>
        
        {/* Whiskers left */}
        <line x1="10" y1="50" x2="25" y2="48" stroke="#000" strokeWidth="2"/>
        <line x1="10" y1="55" x2="25" y2="55" stroke="#000" strokeWidth="2"/>
        <line x1="10" y1="60" x2="25" y2="62" stroke="#000" strokeWidth="2"/>
        
        {/* Whiskers right */}
        <line x1="90" y1="50" x2="75" y2="48" stroke="#000" strokeWidth="2"/>
        <line x1="90" y1="55" x2="75" y2="55" stroke="#000" strokeWidth="2"/>
        <line x1="90" y1="60" x2="75" y2="62" stroke="#000" strokeWidth="2"/>
        
        {/* Feet */}
        <ellipse cx="35" cy="80" rx="8" ry="5" fill="#FF69B4" stroke="#000" strokeWidth="2"/>
        <ellipse cx="65" cy="80" rx="8" ry="5" fill="#FF69B4" stroke="#000" strokeWidth="2"/>
      </svg>
      
      {/* Animated Sunglasses */}
      <motion.div
        animate={animate ? { y: [0, -3, 0] } : {}}
        transition={{ 
          duration: 0.8, 
          repeat: Infinity, 
          ease: 'easeInOut'
        }}
        style={{
          position: 'absolute',
          top: size * 0.38,
          left: size * 0.18,
          width: size * 0.64,
          height: size * 0.15
        }}
      >
        <svg viewBox="0 0 64 15" width="100%" height="100%">
          {/* Left lens */}
          <rect x="2" y="2" width="25" height="11" fill="#000" rx="2"/>
          {/* Right lens */}
          <rect x="37" y="2" width="25" height="11" fill="#000" rx="2"/>
          {/* Bridge */}
          <rect x="27" y="5" width="10" height="3" fill="#000"/>
          {/* Shine on lenses */}
          <rect x="5" y="4" width="6" height="3" fill="#333"/>
          <rect x="40" y="4" width="6" height="3" fill="#333"/>
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default PixelCat;
