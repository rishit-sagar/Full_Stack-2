import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import PixelCat from './PixelCat';

const NavigationBar = ({ user, onAuthClick, onLogout, activeSection, onNavigate, isDarkMode, onToggleDarkMode }) => {
  const navItems = [
    { key: 'courses', label: 'Courses', icon: '📚' },
    { key: 'enrolled', label: 'My Learning', icon: '🎯' },
    { key: 'feedback', label: 'Feedback', icon: '💬' }
  ];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', damping: 20 }}
    >
      <Navbar 
        expand="lg" 
        fixed="top"
        style={{
          backgroundColor: isDarkMode ? 'rgba(26, 26, 46, 0.95)' : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: isDarkMode ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.08)',
          padding: '10px 0',
          transition: 'all 0.3s ease'
        }}
      >
        <Container>
          {/* Brand Logo */}
          <Navbar.Brand 
            href="#home" 
            onClick={() => onNavigate('home')}
            style={{ cursor: 'pointer' }}
          >
            <motion.div
              className="d-flex align-items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <PixelCat size={40} animate={false} style={{ marginRight: '10px' }} />
              <span 
                style={{ 
                  fontWeight: 700, 
                  fontSize: '1.5rem',
                  color: '#A66CFF'
                }}
              >
                EduVerse
              </span>
            </motion.div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Nav.Link
                    onClick={() => onNavigate(item.key)}
                    style={{
                      margin: '0 10px',
                      padding: '10px 20px',
                      borderRadius: '25px',
                      fontWeight: 600,
                      color: activeSection === item.key ? 'white' : '#2D3436',
                      backgroundColor: activeSection === item.key ? '#FF6B6B' : 'transparent',
                      transition: 'all 0.3s ease'
                    }}
                    className="nav-link-custom"
                  >
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      style={{ marginRight: '8px' }}
                    >
                      {item.icon}
                    </motion.span>
                    {item.label}
                  </Nav.Link>
                </motion.div>
              ))}
            </Nav>

            <Nav className="d-flex align-items-center">
              {/* Dark Mode Toggle */}
              <motion.button
                onClick={onToggleDarkMode}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  border: 'none',
                  background: isDarkMode ? '#2D3436' : '#F5F5F5',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '12px',
                  boxShadow: isDarkMode 
                    ? '0 2px 10px rgba(0, 0, 0, 0.3)' 
                    : '0 2px 10px rgba(0, 0, 0, 0.1)',
                  transition: 'background-color 0.3s ease'
                }}
                aria-label="Toggle dark mode"
              >
                <AnimatePresence mode="wait">
                  {isDarkMode ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      exit={{ rotate: 90, scale: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <LightModeIcon style={{ color: '#FFE66D', fontSize: 22 }} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      exit={{ rotate: -90, scale: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <DarkModeIcon style={{ color: '#A66CFF', fontSize: 22 }} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {user ? (
                <div className="d-flex align-items-center gap-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="d-flex align-items-center"
                    style={{
                      backgroundColor: '#F0F0F0',
                      padding: '8px 16px',
                      borderRadius: '25px'
                    }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      style={{
                        width: '35px',
                        height: '35px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #4ECDC4, #45B7D1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '10px'
                      }}
                    >
                      <PersonIcon style={{ color: 'white', fontSize: 20 }} />
                    </motion.div>
                    <span style={{ fontWeight: 600, color: '#2D3436' }}>
                      {user.name}
                    </span>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={onLogout}
                      style={{
                        background: 'linear-gradient(135deg, #FF6B6B, #FFA07A)',
                        border: 'none',
                        borderRadius: '20px',
                        padding: '10px 20px',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <LogoutIcon style={{ fontSize: 18 }} />
                      Logout
                    </Button>
                  </motion.div>
                </div>
              ) : (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={onAuthClick}
                    style={{
                      background: '#A66CFF',
                      border: 'none',
                      borderRadius: '25px',
                      padding: '12px 28px',
                      fontWeight: 700,
                      boxShadow: '0 4px 15px rgba(166, 108, 255, 0.4)'
                    }}
                  >
                    🎮 Login / Register
                  </Button>
                </motion.div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <style>
        {`
          .nav-link-custom:hover {
            background-color: rgba(255, 107, 107, 0.1) !important;
            color: #FF6B6B !important;
          }
        `}
      </style>
    </motion.div>
  );
};

export default NavigationBar;
