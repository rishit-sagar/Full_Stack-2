import React from 'react';
import { motion } from 'framer-motion';

// Animated SVG Doodles in Corporate Memphis Style
const AnimatedDoodles = () => {
  return (
    <div className="doodles-container" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      
      {/* Floating Book Doodle */}
      <motion.svg
        width="120"
        height="100"
        viewBox="0 0 120 100"
        style={{ position: 'absolute', top: '10%', left: '5%' }}
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 5, 0, -5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <path d="M20 80 L60 70 L100 80 L100 20 L60 30 L20 20 Z" fill="#FF6B6B" opacity="0.8"/>
        <path d="M60 30 L60 70" stroke="#2D3436" strokeWidth="2"/>
        <path d="M30 35 L50 40" stroke="#FFE66D" strokeWidth="3" strokeLinecap="round"/>
        <path d="M30 45 L45 48" stroke="#FFE66D" strokeWidth="3" strokeLinecap="round"/>
        <path d="M70 40 L90 35" stroke="#4ECDC4" strokeWidth="3" strokeLinecap="round"/>
        <path d="M70 50 L85 47" stroke="#4ECDC4" strokeWidth="3" strokeLinecap="round"/>
      </motion.svg>

      {/* Floating Graduation Cap */}
      <motion.svg
        width="100"
        height="80"
        viewBox="0 0 100 80"
        style={{ position: 'absolute', top: '15%', right: '8%' }}
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <polygon points="50,10 90,30 50,50 10,30" fill="#A66CFF" opacity="0.85"/>
        <rect x="35" y="45" width="30" height="20" fill="#A66CFF" opacity="0.7"/>
        <line x1="50" y1="30" x2="50" y2="70" stroke="#FFE66D" strokeWidth="2"/>
        <motion.circle 
          cx="50" cy="70" r="5" 
          fill="#FFE66D"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.svg>

      {/* Floating Pencil */}
      <motion.svg
        width="80"
        height="120"
        viewBox="0 0 80 120"
        style={{ position: 'absolute', bottom: '20%', left: '8%' }}
        animate={{ 
          rotate: [0, 10, 0, -10, 0],
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <rect x="30" y="10" width="20" height="80" fill="#FFA07A" rx="2"/>
        <polygon points="30,90 50,90 40,115" fill="#FFE66D"/>
        <rect x="30" y="10" width="20" height="15" fill="#4ECDC4"/>
        <rect x="28" y="75" width="24" height="8" fill="#2D3436" opacity="0.3"/>
      </motion.svg>

      {/* Floating Star Burst */}
      <motion.svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        style={{ position: 'absolute', top: '40%', right: '12%' }}
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <polygon 
          points="30,5 35,22 52,22 38,33 43,50 30,40 17,50 22,33 8,22 25,22" 
          fill="#FFE66D" 
          opacity="0.9"
        />
      </motion.svg>

      {/* Floating Light Bulb (Idea) */}
      <motion.svg
        width="70"
        height="90"
        viewBox="0 0 70 90"
        style={{ position: 'absolute', top: '60%', left: '15%' }}
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ellipse cx="35" cy="35" rx="25" ry="30" fill="#FFE66D" opacity="0.9"/>
        <rect x="28" y="60" width="14" height="8" fill="#636E72"/>
        <rect x="28" y="68" width="14" height="4" fill="#636E72"/>
        <motion.path 
          d="M25 20 Q35 10 45 20" 
          stroke="white" 
          strokeWidth="3" 
          fill="none"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.svg>

      {/* Floating Laptop */}
      <motion.svg
        width="100"
        height="70"
        viewBox="0 0 100 70"
        style={{ position: 'absolute', bottom: '15%', right: '10%' }}
        animate={{ 
          y: [0, -10, 0],
          rotate: [-2, 2, -2]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <rect x="15" y="5" width="70" height="45" rx="3" fill="#45B7D1" opacity="0.9"/>
        <rect x="20" y="10" width="60" height="35" fill="#2D3436" opacity="0.3"/>
        <rect x="5" y="50" width="90" height="8" rx="2" fill="#A66CFF" opacity="0.8"/>
        <motion.rect 
          x="25" y="15" width="30" height="4" 
          fill="#4ECDC4"
          animate={{ width: [30, 50, 30] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <rect x="25" y="23" width="45" height="3" fill="#FFE66D" opacity="0.6"/>
        <rect x="25" y="30" width="35" height="3" fill="#FFE66D" opacity="0.6"/>
      </motion.svg>

      {/* Floating Coffee Cup */}
      <motion.svg
        width="60"
        height="70"
        viewBox="0 0 60 70"
        style={{ position: 'absolute', top: '70%', right: '25%' }}
        animate={{ 
          y: [0, -8, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <rect x="10" y="25" width="35" height="40" rx="3" fill="#FF9ECD" opacity="0.9"/>
        <path d="M45 35 Q55 35 55 45 Q55 55 45 55" stroke="#FF9ECD" strokeWidth="4" fill="none"/>
        <motion.path 
          d="M15 15 Q20 5 25 15 M25 18 Q30 8 35 18 M35 12 Q40 2 45 12" 
          stroke="#636E72" 
          strokeWidth="2" 
          fill="none"
          opacity="0.5"
          animate={{ y: [0, -5, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.svg>

      {/* Floating Geometric Shape 1 */}
      <motion.svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        style={{ position: 'absolute', top: '25%', left: '25%' }}
        animate={{ 
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <circle cx="25" cy="25" r="20" fill="none" stroke="#4ECDC4" strokeWidth="4" opacity="0.6"/>
        <circle cx="25" cy="25" r="10" fill="#FF6B6B" opacity="0.7"/>
      </motion.svg>

      {/* Floating Geometric Shape 2 */}
      <motion.svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        style={{ position: 'absolute', bottom: '35%', left: '30%' }}
        animate={{ 
          rotate: [0, -90, 0],
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <rect x="5" y="5" width="30" height="30" fill="#A66CFF" opacity="0.5" transform="rotate(15 20 20)"/>
      </motion.svg>

      {/* Floating Dots Pattern */}
      <motion.svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        style={{ position: 'absolute', top: '50%', left: '45%' }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <circle cx="15" cy="15" r="5" fill="#FFE66D"/>
        <circle cx="40" cy="15" r="5" fill="#FF6B6B"/>
        <circle cx="65" cy="15" r="5" fill="#4ECDC4"/>
        <circle cx="15" cy="40" r="5" fill="#A66CFF"/>
        <circle cx="40" cy="40" r="5" fill="#FF9ECD"/>
        <circle cx="65" cy="40" r="5" fill="#45B7D1"/>
        <circle cx="15" cy="65" r="5" fill="#FFA07A"/>
        <circle cx="40" cy="65" r="5" fill="#FFE66D"/>
        <circle cx="65" cy="65" r="5" fill="#FF6B6B"/>
      </motion.svg>

      {/* Floating Target/Goal */}
      <motion.svg
        width="70"
        height="70"
        viewBox="0 0 70 70"
        style={{ position: 'absolute', bottom: '10%', left: '40%' }}
        animate={{ 
          rotate: [0, 10, 0, -10, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <circle cx="35" cy="35" r="30" fill="none" stroke="#FF6B6B" strokeWidth="4" opacity="0.7"/>
        <circle cx="35" cy="35" r="20" fill="none" stroke="#FFE66D" strokeWidth="4" opacity="0.7"/>
        <circle cx="35" cy="35" r="10" fill="#4ECDC4" opacity="0.8"/>
      </motion.svg>

      {/* Floating Wave Lines */}
      <motion.svg
        width="150"
        height="50"
        viewBox="0 0 150 50"
        style={{ position: 'absolute', top: '85%', left: '10%' }}
        animate={{ 
          x: [0, 20, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.path 
          d="M0 25 Q25 10 50 25 Q75 40 100 25 Q125 10 150 25" 
          stroke="#4ECDC4" 
          strokeWidth="3" 
          fill="none"
          opacity="0.5"
        />
        <motion.path 
          d="M0 35 Q25 20 50 35 Q75 50 100 35 Q125 20 150 35" 
          stroke="#FF9ECD" 
          strokeWidth="3" 
          fill="none"
          opacity="0.5"
        />
      </motion.svg>

    </div>
  );
};

export default AnimatedDoodles;
