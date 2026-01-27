import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Form, Button, Card, Nav, Tab } from 'react-bootstrap';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArcadeTextEffect from './ArcadeTextEffect';
import PixelCat from './PixelCat';

const AuthModal = ({ show, onClose, onLogin }) => {
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login/register
    onLogin({ name: formData.name || 'Student', email: formData.email });
  };

  if (!show) return null;

  return (
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
        zIndex: 1000,
        backdropFilter: 'blur(5px)'
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', damping: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <Card 
          className="border-0"
          style={{ 
            width: '450px', 
            maxWidth: '95vw',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)'
          }}
        >
          {/* Header with Gradient */}
          <div 
            style={{ 
              background: 'linear-gradient(135deg, #FFB6C1, #A66CFF)',
              padding: '30px',
              textAlign: 'center'
            }}
          >
            <PixelCat size={70} animate={true} style={{ margin: '0 auto' }} />
            <h3 style={{ color: 'white', marginTop: '10px', fontWeight: 700 }}>
              Welcome to EduVerse
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0 }}>
              Your journey to knowledge starts here
            </p>
          </div>

          <Card.Body style={{ padding: '30px' }}>
            <Tab.Container activeKey={activeTab} onSelect={setActiveTab}>
              <Nav 
                variant="pills" 
                className="mb-4 justify-content-center"
                style={{ gap: '10px' }}
              >
                <Nav.Item>
                  <Nav.Link 
                    eventKey="login"
                    style={{
                      borderRadius: '20px',
                      padding: '10px 30px',
                      fontWeight: 600,
                      backgroundColor: activeTab === 'login' ? '#FF6B6B' : 'transparent',
                      color: activeTab === 'login' ? 'white' : '#636E72',
                      border: activeTab !== 'login' ? '2px solid #E0E0E0' : 'none'
                    }}
                  >
                    Login
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link 
                    eventKey="register"
                    style={{
                      borderRadius: '20px',
                      padding: '10px 30px',
                      fontWeight: 600,
                      backgroundColor: activeTab === 'register' ? '#4ECDC4' : 'transparent',
                      color: activeTab === 'register' ? 'white' : '#636E72',
                      border: activeTab !== 'register' ? '2px solid #E0E0E0' : 'none'
                    }}
                  >
                    Register
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="login">
                  <Form onSubmit={handleSubmit}>
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <ArcadeTextEffect
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        icon={<EmailIcon style={{ color: '#A66CFF' }} />}
                        placeholder="Enter your email"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <ArcadeTextEffect
                        label="Password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={handleInputChange}
                        icon={<LockIcon style={{ color: '#A66CFF' }} />}
                        placeholder="Enter your password"
                        endIcon={
                          <IconButton 
                            onClick={() => setShowPassword(!showPassword)}
                            size="small"
                          >
                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                          </IconButton>
                        }
                      />
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        type="submit"
                        className="w-100 mt-3"
                        style={{
                          background: '#FF6B6B',
                          border: 'none',
                          borderRadius: '15px',
                          padding: '15px',
                          fontWeight: 700,
                          fontSize: '16px',
                          boxShadow: '0 5px 20px rgba(255, 107, 107, 0.4)'
                        }}
                      >
                        🎮 Login & Play
                      </Button>
                    </motion.div>
                  </Form>
                </Tab.Pane>

                <Tab.Pane eventKey="register">
                  <Form onSubmit={handleSubmit}>
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <ArcadeTextEffect
                        label="Full Name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        icon={<PersonIcon style={{ color: '#4ECDC4' }} />}
                        placeholder="Enter your name"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <ArcadeTextEffect
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        icon={<EmailIcon style={{ color: '#4ECDC4' }} />}
                        placeholder="Enter your email"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <ArcadeTextEffect
                        label="Password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={handleInputChange}
                        icon={<LockIcon style={{ color: '#4ECDC4' }} />}
                        placeholder="Create a password"
                        endIcon={
                          <IconButton 
                            onClick={() => setShowPassword(!showPassword)}
                            size="small"
                          >
                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                          </IconButton>
                        }
                      />
                    </motion.div>

                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <ArcadeTextEffect
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        icon={<LockIcon style={{ color: '#4ECDC4' }} />}
                        placeholder="Confirm your password"
                      />
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        type="submit"
                        className="w-100 mt-3"
                        style={{
                          background: '#4ECDC4',
                          border: 'none',
                          borderRadius: '15px',
                          padding: '15px',
                          fontWeight: 700,
                          fontSize: '16px',
                          boxShadow: '0 5px 20px rgba(78, 205, 196, 0.4)'
                        }}
                      >
                        🚀 Start Learning
                      </Button>
                    </motion.div>
                  </Form>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Card.Body>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default AuthModal;
