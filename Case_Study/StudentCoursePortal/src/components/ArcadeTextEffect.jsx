import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TextField, InputAdornment } from '@mui/material';

// Arcade boom characters
const boomChars = ['💥', '⚡', '✨', '🔥', '💫', '⭐', '🌟', '💢', '💨', '🎮'];
const boomColors = ['#FF6B6B', '#FFE66D', '#4ECDC4', '#A66CFF', '#FF9ECD', '#45B7D1'];

const ArcadeTextEffect = ({ 
  label, 
  name, 
  type = 'text', 
  value, 
  onChange, 
  icon, 
  endIcon,
  placeholder,
  multiline = false,
  rows = 1
}) => {
  const [booms, setBooms] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [shake, setShake] = useState(false);
  const inputRef = useRef(null);

  const createBoom = useCallback((e) => {
    const inputElement = inputRef.current?.querySelector('input, textarea');
    if (!inputElement) return;

    const rect = inputElement.getBoundingClientRect();
    const style = window.getComputedStyle(inputElement);
    const fontSize = parseFloat(style.fontSize);
    
    // Calculate approximate cursor position
    const textWidth = value.length * (fontSize * 0.6);
    const x = rect.left + Math.min(textWidth, rect.width - 30) + 40;
    const y = rect.top + rect.height / 2;

    const newBoom = {
      id: Date.now() + Math.random(),
      x,
      y,
      char: boomChars[Math.floor(Math.random() * boomChars.length)],
      color: boomColors[Math.floor(Math.random() * boomColors.length)],
      rotation: Math.random() * 60 - 30,
      scale: 0.8 + Math.random() * 0.6
    };

    setBooms(prev => [...prev, newBoom]);

    // Remove boom after animation
    setTimeout(() => {
      setBooms(prev => prev.filter(b => b.id !== newBoom.id));
    }, 500);
  }, [value]);

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 100);
  };

  const handleKeyDown = (e) => {
    if (e.key !== 'Shift' && e.key !== 'Control' && e.key !== 'Alt' && e.key !== 'Tab') {
      createBoom(e);
      // Trigger input field shake on each keypress
      triggerShake();
    }
  };

  // Generate random shake offset
  const shakeX = shake ? (Math.random() - 0.5) * 8 : 0;
  const shakeY = shake ? (Math.random() - 0.5) * 8 : 0;

  return (
    <motion.div 
      style={{ marginBottom: '20px', position: 'relative' }} 
      ref={inputRef}
      animate={{ 
        x: shakeX, 
        y: shakeY 
      }}
      transition={{ duration: 0.05 }}
    >
      <TextField
        fullWidth
        label={label}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        multiline={multiline}
        rows={rows}
        variant="outlined"
        InputProps={{
          startAdornment: icon && (
            <InputAdornment position="start">
              <motion.div
                animate={isFocused ? { rotate: [0, -10, 10, 0], scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.5 }}
              >
                {icon}
              </motion.div>
            </InputAdornment>
          ),
          endAdornment: endIcon && (
            <InputAdornment position="end">
              {endIcon}
            </InputAdornment>
          ),
          style: {
            fontFamily: isFocused ? "'Press Start 2P', cursive" : "'Space Grotesk', sans-serif",
            fontSize: isFocused ? '11px' : '14px',
            transition: 'all 0.3s ease',
            borderRadius: '12px'
          }
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            transition: 'all 0.3s ease',
            backgroundColor: 'white',
            '& fieldset': {
              borderColor: '#E0E0E0',
              borderWidth: '2px',
              transition: 'all 0.3s ease'
            },
            '&:hover fieldset': {
              borderColor: '#A66CFF'
            },
            '&.Mui-focused fieldset': {
              borderColor: '#FF6B6B',
              borderWidth: '3px',
              boxShadow: '0 0 15px rgba(255, 107, 107, 0.3), 0 0 30px rgba(255, 230, 109, 0.2)'
            }
          },
          '& .MuiInputLabel-root': {
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            '&.Mui-focused': {
              color: '#FF6B6B'
            }
          }
        }}
      />

      {/* Arcade Boom Effects */}
      <AnimatePresence>
        {booms.map((boom) => (
          <motion.div
            key={boom.id}
            initial={{ scale: 0, opacity: 1, x: 0, y: 0 }}
            animate={{ 
              scale: boom.scale * 1.5, 
              opacity: 0,
              y: -30,
              rotate: boom.rotation
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              left: boom.x,
              top: boom.y,
              fontSize: '24px',
              pointerEvents: 'none',
              zIndex: 9999,
              textShadow: `0 0 10px ${boom.color}`,
              filter: `drop-shadow(0 0 5px ${boom.color})`
            }}
          >
            {boom.char}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Glow line under input when focused */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isFocused ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: '10%',
          right: '10%',
          height: '3px',
          background: 'linear-gradient(90deg, #FF6B6B, #FFE66D, #4ECDC4)',
          borderRadius: '2px',
          transformOrigin: 'center'
        }}
      />
    </motion.div>
  );
};

export default ArcadeTextEffect;
