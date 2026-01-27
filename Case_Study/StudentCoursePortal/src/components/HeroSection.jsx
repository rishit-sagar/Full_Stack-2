import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';

const HeroSection = ({ onGetStarted, user }) => {
  const stats = [
    { icon: <AutoStoriesIcon />, value: '500+', label: 'Courses' },
    { icon: <GroupsIcon />, value: '50K+', label: 'Students' },
    { icon: <EmojiEventsIcon />, value: '98%', label: 'Success Rate' }
  ];

  return (
    <section 
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center',
        paddingTop: '100px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #FFE66D, #FFA07A)',
                  padding: '8px 20px',
                  borderRadius: '25px',
                  fontSize: '14px',
                  fontWeight: 600,
                  marginBottom: '20px'
                }}
              >
                🎮 Level Up Your Skills
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: 800,
                  lineHeight: 1.2,
                  marginBottom: '20px'
                }}
              >
                Learn Without{' '}
                <span 
                  style={{
                    background: 'linear-gradient(135deg, #FF6B6B, #A66CFF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Limits
                </span>
                <br />
                Grow Without{' '}
                <span 
                  style={{
                    background: 'linear-gradient(135deg, #4ECDC4, #45B7D1)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Boundaries
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                style={{
                  fontSize: '1.2rem',
                  color: '#636E72',
                  marginBottom: '30px',
                  maxWidth: '500px'
                }}
              >
                Embark on your learning adventure with our curated courses. 
                Master new skills, earn certificates, and unlock your potential!
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="d-flex gap-3 flex-wrap"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={onGetStarted}
                    size="lg"
                    style={{
                      background: '#A66CFF',
                      border: 'none',
                      borderRadius: '30px',
                      padding: '15px 40px',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      boxShadow: '0 10px 30px rgba(166, 108, 255, 0.4)'
                    }}
                  >
                    {user ? '🎯 Explore Courses' : '🚀 Get Started Free'}
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline-dark"
                    size="lg"
                    style={{
                      borderRadius: '30px',
                      padding: '15px 40px',
                      fontWeight: 600,
                      fontSize: '1.1rem',
                      borderWidth: '2px'
                    }}
                  >
                    📺 Watch Demo
                  </Button>
                </motion.div>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="d-flex gap-4 mt-5 flex-wrap"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -5 }}
                    style={{
                      textAlign: 'center',
                      padding: '15px 25px',
                      backgroundColor: 'white',
                      borderRadius: '20px',
                      boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)'
                    }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 + index }}
                      style={{ color: '#FF6B6B', marginBottom: '5px' }}
                    >
                      {stat.icon}
                    </motion.div>
                    <div style={{ fontWeight: 800, fontSize: '1.5rem', color: '#2D3436' }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#636E72' }}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </Col>

          <Col lg={6} className="d-none d-lg-block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ position: 'relative' }}
            >
              {/* Decorative Hero Illustration */}
              <svg viewBox="0 0 500 500" style={{ width: '100%', maxWidth: '500px', margin: '0 auto', display: 'block' }}>
                {/* Background Circle */}
                <motion.circle
                  cx="250"
                  cy="250"
                  r="200"
                  fill="#FFE66D"
                  opacity="0.3"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                {/* Person Body */}
                <motion.ellipse
                  cx="250"
                  cy="320"
                  rx="80"
                  ry="100"
                  fill="#4ECDC4"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                {/* Head */}
                <motion.circle
                  cx="250"
                  cy="180"
                  r="60"
                  fill="#FFA07A"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                {/* Hair */}
                <motion.ellipse
                  cx="250"
                  cy="150"
                  rx="55"
                  ry="35"
                  fill="#2D3436"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                {/* Book */}
                <motion.rect
                  x="180"
                  y="280"
                  width="140"
                  height="100"
                  rx="5"
                  fill="#A66CFF"
                  animate={{ rotate: [-5, 5, -5], y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ transformOrigin: '250px 330px' }}
                />
                
                {/* Book Lines */}
                <motion.line x1="200" y1="300" x2="280" y2="300" stroke="white" strokeWidth="4" animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity }} />
                <motion.line x1="200" y1="320" x2="260" y2="320" stroke="white" strokeWidth="4" animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity }} />
                <motion.line x1="200" y1="340" x2="270" y2="340" stroke="white" strokeWidth="4" animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity }} />
                
                {/* Floating Elements */}
                <motion.circle
                  cx="380"
                  cy="150"
                  r="30"
                  fill="#FF6B6B"
                  animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.rect
                  x="100"
                  y="200"
                  width="40"
                  height="40"
                  fill="#45B7D1"
                  rx="8"
                  animate={{ rotate: [0, 180, 360], y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  style={{ transformOrigin: '120px 220px' }}
                />
                <motion.polygon
                  points="400,300 420,340 380,340"
                  fill="#FF9ECD"
                  animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ transformOrigin: '400px 320px' }}
                />
                
                {/* Stars */}
                <motion.text
                  x="120"
                  y="130"
                  fontSize="30"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ⭐
                </motion.text>
                <motion.text
                  x="400"
                  y="250"
                  fontSize="25"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  ✨
                </motion.text>
                <motion.text
                  x="350"
                  y="400"
                  fontSize="20"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  style={{ transformOrigin: '360px 390px' }}
                >
                  💫
                </motion.text>
              </svg>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
