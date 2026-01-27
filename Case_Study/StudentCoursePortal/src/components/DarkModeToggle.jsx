import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DarkModeToggle = ({ isDark, onToggle }) => {
  const [ripple, setRipple] = useState({ show: false, x: 0, y: 0 });

  const handleClick = (e) => {
    // Get button position for ripple center
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    
    // Show ripple animation
    setRipple({ show: true, x, y });
    
    // Toggle dark mode
    onToggle();
    
    // Hide ripple after animation
    setTimeout(() => {
      setRipple({ show: false, x: 0, y: 0 });
    }, 600);
  };

  return (
    <>
      {/* Spread Animation Overlay */}
      <AnimatePresence>
        {ripple.show && (
          <motion.div
            initial={{ 
              scale: 0,
              opacity: 1
            }}
            animate={{ 
              scale: 80,
              opacity: 0
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1]
            }}
            style={{
              position: 'fixed',
              left: ripple.x,
              top: ripple.y,
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: isDark ? '#FFF9F0' : '#1A1A2E',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
              zIndex: 9998
            }}
          />
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: 'fixed',
          bottom: '100px',
          right: '30px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          border: 'none',
          background: isDark ? '#2D3436' : '#FFFFFF',
          boxShadow: isDark 
            ? '0 4px 20px rgba(0, 0, 0, 0.4)' 
            : '0 4px 20px rgba(0, 0, 0, 0.15)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          overflow: 'hidden'
        }}
        aria-label="Toggle dark mode"
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: 90, scale: 0 }}
              transition={{ duration: 0.3 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {/* Sun Icon */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFE66D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: -90, scale: 0 }}
              transition={{ duration: 0.3 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {/* Moon Icon */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="#A66CFF"
                stroke="#A66CFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
};

export default DarkModeToggle;
