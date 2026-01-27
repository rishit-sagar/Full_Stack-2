import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { LinearProgress, Chip } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const EnrolledCourses = ({ user, enrolledCourses, onUnenroll }) => {
  // Simulated progress data
  const getProgress = (courseId) => {
    const progressMap = {
      1: 65,
      2: 30,
      3: 85,
      4: 45,
      5: 20,
      6: 55
    };
    return progressMap[courseId] || Math.floor(Math.random() * 80) + 10;
  };

  if (!user) {
    return (
      <section id="enrolled" style={{ padding: '100px 0', minHeight: '60vh' }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ fontSize: '5rem', marginBottom: '20px' }}
            >
              🔒
            </motion.div>
            <h2 style={{ fontWeight: 700, marginBottom: '15px' }}>
              Login to View Your Courses
            </h2>
            <p style={{ color: '#636E72', maxWidth: '500px', margin: '0 auto' }}>
              Please login or register to access your enrolled courses and track your learning progress.
            </p>
          </motion.div>
        </Container>
      </section>
    );
  }

  return (
    <section id="enrolled" style={{ padding: '80px 0', minHeight: '100vh' }}>
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #FF6B6B, #FFA07A)',
              padding: '8px 20px',
              borderRadius: '25px',
              fontSize: '14px',
              fontWeight: 600,
              color: 'white',
              marginBottom: '15px'
            }}
          >
            🎯 My Learning
          </motion.span>
          <h2 className="section-title mx-auto" style={{ display: 'table' }}>
            Your Enrolled Courses
          </h2>
          <p style={{ color: '#636E72', maxWidth: '600px', margin: '20px auto' }}>
            Continue your learning journey. Track progress and achieve your goals!
          </p>
        </motion.div>

        {/* Stats Cards */}
        {enrolledCourses.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5"
          >
            <Row className="g-4 justify-content-center">
              <Col md={4}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  style={{
                    background: 'linear-gradient(135deg, #FF6B6B, #FFA07A)',
                    borderRadius: '20px',
                    padding: '25px',
                    color: 'white',
                    textAlign: 'center'
                  }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <EmojiEventsIcon style={{ fontSize: 50 }} />
                  </motion.div>
                  <h3 style={{ fontWeight: 800, margin: '10px 0 5px' }}>{enrolledCourses.length}</h3>
                  <p style={{ margin: 0, opacity: 0.9 }}>Enrolled Courses</p>
                </motion.div>
              </Col>
              <Col md={4}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  style={{
                    background: 'linear-gradient(135deg, #4ECDC4, #45B7D1)',
                    borderRadius: '20px',
                    padding: '25px',
                    color: 'white',
                    textAlign: 'center'
                  }}
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <TrendingUpIcon style={{ fontSize: 50 }} />
                  </motion.div>
                  <h3 style={{ fontWeight: 800, margin: '10px 0 5px' }}>
                    {Math.round(enrolledCourses.reduce((acc, c) => acc + getProgress(c.id), 0) / enrolledCourses.length)}%
                  </h3>
                  <p style={{ margin: 0, opacity: 0.9 }}>Average Progress</p>
                </motion.div>
              </Col>
              <Col md={4}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  style={{
                    background: 'linear-gradient(135deg, #A66CFF, #FF9ECD)',
                    borderRadius: '20px',
                    padding: '25px',
                    color: 'white',
                    textAlign: 'center'
                  }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <AccessTimeIcon style={{ fontSize: 50 }} />
                  </motion.div>
                  <h3 style={{ fontWeight: 800, margin: '10px 0 5px' }}>
                    {enrolledCourses.reduce((acc, c) => acc + parseInt(c.duration), 0)}h
                  </h3>
                  <p style={{ margin: 0, opacity: 0.9 }}>Total Learning Time</p>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        )}

        {/* Enrolled Courses Grid */}
        {enrolledCourses.length > 0 ? (
          <Row className="g-4">
            <AnimatePresence>
              {enrolledCourses.map((course, index) => {
                const progress = getProgress(course.id);
                return (
                  <Col key={course.id} lg={6}>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      exit={{ opacity: 0, x: 30 }}
                      whileHover={{ y: -5 }}
                    >
                      <Card 
                        className="border-0"
                        style={{ 
                          borderRadius: '24px',
                          overflow: 'hidden',
                          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)'
                        }}
                      >
                        <Card.Body style={{ padding: '0' }}>
                          <Row className="g-0">
                            {/* Course Image/Icon Section */}
                            <Col xs={4}>
                              <div
                                style={{
                                  background: `linear-gradient(135deg, ${course.color}30, ${course.color}60)`,
                                  height: '100%',
                                  minHeight: '200px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center'
                                }}
                              >
                                <motion.div
                                  animate={{ 
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 5, -5, 0]
                                  }}
                                  transition={{ duration: 3, repeat: Infinity }}
                                  style={{ fontSize: '4rem' }}
                                >
                                  {course.image}
                                </motion.div>
                              </div>
                            </Col>

                            {/* Course Info Section */}
                            <Col xs={8}>
                              <div style={{ padding: '20px' }}>
                                <div className="d-flex justify-content-between align-items-start mb-2">
                                  <Chip
                                    label={course.level}
                                    size="small"
                                    sx={{
                                      backgroundColor: course.color,
                                      color: 'white',
                                      fontWeight: 600
                                    }}
                                  />
                                  <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => onUnenroll(course.id)}
                                    style={{
                                      background: 'none',
                                      border: 'none',
                                      cursor: 'pointer',
                                      color: '#FF6B6B'
                                    }}
                                  >
                                    <DeleteIcon />
                                  </motion.button>
                                </div>

                                <h5 style={{ fontWeight: 700, marginBottom: '8px' }}>
                                  {course.title}
                                </h5>

                                <p style={{ 
                                  color: '#636E72', 
                                  fontSize: '0.85rem',
                                  marginBottom: '15px'
                                }}>
                                  {course.instructor}
                                </p>

                                {/* Progress Bar */}
                                <div style={{ marginBottom: '15px' }}>
                                  <div className="d-flex justify-content-between mb-2">
                                    <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                                      Progress
                                    </span>
                                    <span style={{ 
                                      fontSize: '0.85rem', 
                                      fontWeight: 700,
                                      color: course.color
                                    }}>
                                      {progress}%
                                    </span>
                                  </div>
                                  <LinearProgress
                                    variant="determinate"
                                    value={progress}
                                    sx={{
                                      height: 10,
                                      borderRadius: 5,
                                      backgroundColor: '#E0E0E0',
                                      '& .MuiLinearProgress-bar': {
                                        borderRadius: 5,
                                        background: `linear-gradient(90deg, ${course.color}, ${course.color}CC)`
                                      }
                                    }}
                                  />
                                </div>

                                {/* Continue Button */}
                                <motion.div 
                                  whileHover={{ scale: 1.02 }} 
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <Button
                                    style={{
                                      background: `linear-gradient(135deg, ${course.color}, ${course.color}CC)`,
                                      border: 'none',
                                      borderRadius: '15px',
                                      padding: '10px 20px',
                                      fontWeight: 600,
                                      width: '100%',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      gap: '8px'
                                    }}
                                  >
                                    <PlayCircleIcon style={{ fontSize: 20 }} />
                                    Continue Learning
                                  </Button>
                                </motion.div>
                              </div>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Col>
                );
              })}
            </AnimatePresence>
          </Row>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-5"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ fontSize: '5rem', marginBottom: '20px' }}
            >
              📭
            </motion.div>
            <h4 style={{ fontWeight: 700, marginBottom: '10px' }}>
              No Courses Yet
            </h4>
            <p style={{ color: '#636E72', maxWidth: '400px', margin: '0 auto 20px' }}>
              You haven't enrolled in any courses yet. Start exploring and find courses that interest you!
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                style={{
                  background: 'linear-gradient(135deg, #FF6B6B, #A66CFF)',
                  border: 'none',
                  borderRadius: '25px',
                  padding: '15px 35px',
                  fontWeight: 700
                }}
              >
                🚀 Explore Courses
              </Button>
            </motion.div>
          </motion.div>
        )}
      </Container>
    </section>
  );
};

export default EnrolledCourses;
