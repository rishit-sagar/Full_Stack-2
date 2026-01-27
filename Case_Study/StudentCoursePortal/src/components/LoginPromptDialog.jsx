import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from 'react-bootstrap';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LoginIcon from '@mui/icons-material/Login';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

const LoginPromptDialog = ({ open, onClose, onLoginClick, message }) => {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(45, 52, 54, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1100,
          backdropFilter: 'blur(8px)'
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.5, opacity: 0, y: 50 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
            borderRadius: '24px',
            padding: '40px',
            maxWidth: '420px',
            width: '90%',
            textAlign: 'center',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Decorative gradient top border */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '5px',
              background: 'linear-gradient(90deg, #FF6B6B, #A66CFF, #4ECDC4)'
            }}
          />

          {/* Close button */}
          <IconButton
            onClick={onClose}
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              color: '#636E72'
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Lock Icon with animation */}
          <motion.div
            initial={{ rotate: -10 }}
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #FF6B6B, #A66CFF)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
              boxShadow: '0 10px 30px rgba(166, 108, 255, 0.3)'
            }}
          >
            <LockOutlinedIcon sx={{ fontSize: 40, color: 'white' }} />
          </motion.div>

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              fontWeight: 700,
              fontSize: '1.5rem',
              color: '#2D3436',
              marginBottom: '12px'
            }}
          >
            Login Required
          </motion.h3>

          {/* Message */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              color: '#636E72',
              fontSize: '1rem',
              marginBottom: '28px',
              lineHeight: 1.6
            }}
          >
            {message || 'Please login to access this feature and unlock all the benefits of our platform.'}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}
          >
            <Button
              variant="outline-secondary"
              onClick={onClose}
              style={{
                borderRadius: '25px',
                padding: '10px 24px',
                fontWeight: 600,
                border: '2px solid #dfe6e9'
              }}
            >
              Maybe Later
            </Button>
            <Button
              onClick={() => {
                onClose();
                onLoginClick();
              }}
              style={{
                background: 'linear-gradient(135deg, #A66CFF, #FF6B6B)',
                border: 'none',
                borderRadius: '25px',
                padding: '10px 28px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 8px 25px rgba(166, 108, 255, 0.35)'
              }}
            >
              <LoginIcon sx={{ fontSize: 20 }} />
              Login Now
            </Button>
          </motion.div>

          {/* Additional info */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              marginTop: '20px',
              fontSize: '0.85rem',
              color: '#b2bec3'
            }}
          >
            Don't have an account? You can sign up for free!
          </motion.p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoginPromptDialog;
