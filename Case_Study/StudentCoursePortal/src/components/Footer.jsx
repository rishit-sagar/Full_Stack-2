import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { IconButton, TextField, InputAdornment } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PixelCat from './PixelCat';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Explore',
      links: [
        { name: 'All Courses', href: '#courses' },
        { name: 'Categories', href: '#' },
        { name: 'Instructors', href: '#' },
        { name: 'Pricing', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#' },
        { name: 'Tutorials', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Community', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'Press', href: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'Accessibility', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: <GitHubIcon />, href: '#', label: 'GitHub', color: '#333' },
    { icon: <LinkedInIcon />, href: '#', label: 'LinkedIn', color: '#0077B5' },
    { icon: <TwitterIcon />, href: '#', label: 'Twitter', color: '#1DA1F2' },
    { icon: <InstagramIcon />, href: '#', label: 'Instagram', color: '#E4405F' }
  ];

  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, #2D3436 0%, #1A1A2E 100%)',
        color: 'white',
        paddingTop: '80px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Top Wave */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '6px',
          background: 'linear-gradient(90deg, #FF6B6B, #FFE66D, #4ECDC4, #45B7D1, #A66CFF, #FF9ECD)'
        }}
      />

      {/* Background Doodles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          border: '2px dashed rgba(255, 255, 255, 0.1)',
          pointerEvents: 'none'
        }}
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '3%',
          fontSize: '4rem',
          opacity: 0.1,
          pointerEvents: 'none'
        }}
      >
        🎓
      </motion.div>

      <Container>
        {/* Main Footer Content */}
        <Row className="mb-5">
          {/* Brand Section */}
          <Col lg={4} className="mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <div className="d-flex align-items-center mb-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    width: '50px',
                    height: '50px',
                    background: '#A66CFF',
                    borderRadius: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '12px'
                  }}
                >
                  <PixelCat size={35} animate={false} />
                </motion.div>
                <span
                  style={{
                    fontWeight: 800,
                    fontSize: '1.8rem',
                    color: '#A66CFF'
                  }}
                >
                  EduVerse
                </span>
              </div>

              <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8, marginBottom: '25px' }}>
                Empowering learners worldwide with cutting-edge courses and an 
                immersive learning experience. Join thousands of students on their 
                journey to mastery.
              </p>

              {/* Social Links */}
              <div className="d-flex gap-2">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconButton
                      href={social.href}
                      aria-label={social.label}
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: social.color,
                          color: 'white'
                        },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Col>

          {/* Links Sections */}
          {footerLinks.map((section, sectionIndex) => (
            <Col key={section.title} xs={6} md={3} lg={2} className="mb-4 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1 }}
              >
                <h5
                  style={{
                    fontWeight: 700,
                    marginBottom: '20px',
                    fontSize: '1rem',
                    color: 'white'
                  }}
                >
                  {section.title}
                </h5>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      whileHover={{ x: 5 }}
                      style={{ marginBottom: '12px' }}
                    >
                      <a
                        href={link.href}
                        style={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          textDecoration: 'none',
                          fontSize: '0.95rem',
                          transition: 'color 0.3s ease'
                        }}
                        onMouseOver={(e) => e.target.style.color = '#FF6B6B'}
                        onMouseOut={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Row className="justify-content-center mb-5">
            <Col md={8} lg={6}>
              <div
                style={{
                  background: 'linear-gradient(135deg, rgba(166, 108, 255, 0.2), rgba(255, 158, 205, 0.2))',
                  borderRadius: '25px',
                  padding: '40px',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ fontSize: '2.5rem', marginBottom: '15px' }}
                >
                  ✉️
                </motion.div>
                <h4 style={{ fontWeight: 700, marginBottom: '10px' }}>
                  Stay Updated
                </h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '20px' }}>
                  Get the latest courses and learning tips delivered to your inbox.
                </p>
                <form onSubmit={(e) => e.preventDefault()}>
                  <TextField
                    fullWidth
                    placeholder="Enter your email"
                    type="email"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon style={{ color: 'rgba(255, 255, 255, 0.5)' }} />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <IconButton
                              type="submit"
                              sx={{
                                background: 'linear-gradient(135deg, #FF6B6B, #A66CFF)',
                                color: 'white',
                                '&:hover': {
                                  background: 'linear-gradient(135deg, #FF8E8E, #B88AFF)'
                                }
                              }}
                            >
                              <SendIcon />
                            </IconButton>
                          </motion.div>
                        </InputAdornment>
                      )
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '50px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.2)'
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.4)'
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#A66CFF'
                        }
                      },
                      '& input::placeholder': {
                        color: 'rgba(255, 255, 255, 0.5)'
                      }
                    }}
                  />
                </form>
              </div>
            </Col>
          </Row>
        </motion.div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '30px',
            paddingBottom: '30px'
          }}
        >
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
              <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>
                © {currentYear} EduVerse. All rights reserved.
              </p>
            </Col>
            <Col md={6} className="text-center text-md-end">
              <motion.p
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ margin: 0, color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}
              >
                Made with{' '}
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  style={{ display: 'inline-block' }}
                >
                  <FavoriteIcon style={{ color: '#FF6B6B', fontSize: 16, verticalAlign: 'middle' }} />
                </motion.span>
                {' '}for learners everywhere
              </motion.p>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
