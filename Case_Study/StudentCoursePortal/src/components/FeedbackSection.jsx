import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Slider, Chip } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArcadeTextEffect from './ArcadeTextEffect';

const customIcons = {
  1: { icon: <SentimentVeryDissatisfiedIcon style={{ fontSize: 40 }} />, label: 'Very Dissatisfied' },
  2: { icon: <SentimentDissatisfiedIcon style={{ fontSize: 40 }} />, label: 'Dissatisfied' },
  3: { icon: <SentimentSatisfiedIcon style={{ fontSize: 40 }} />, label: 'Neutral' },
  4: { icon: <SentimentSatisfiedAltIcon style={{ fontSize: 40 }} />, label: 'Satisfied' },
  5: { icon: <SentimentVerySatisfiedIcon style={{ fontSize: 40 }} />, label: 'Very Satisfied' }
};

const feedbackCategories = [
  { label: 'Course Content', emoji: '📚' },
  { label: 'Instructors', emoji: '👨‍🏫' },
  { label: 'Platform', emoji: '💻' },
  { label: 'Support', emoji: '🎧' },
  { label: 'General', emoji: '💬' }
];

const FeedbackSection = ({ user, enrolledCourses }) => {
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    course: '',
    category: '',
    rating: 4,
    experience: 7,
    feedback: '',
    suggestions: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfetti(true);
    setTimeout(() => {
      setSubmitted(true);
      setShowConfetti(false);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
      course: '',
      category: '',
      rating: 4,
      experience: 7,
      feedback: '',
      suggestions: ''
    });
    setSubmitted(false);
  };

  if (!user) {
    return (
      <section id="feedback" style={{ padding: '100px 0', minHeight: '60vh' }}>
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
              💬
            </motion.div>
            <h2 style={{ fontWeight: 700, marginBottom: '15px' }}>
              Share Your Thoughts
            </h2>
            <p style={{ color: '#636E72', maxWidth: '500px', margin: '0 auto' }}>
              Please login to share your feedback and help us improve your learning experience.
            </p>
          </motion.div>
        </Container>
      </section>
    );
  }

  return (
    <section id="feedback" style={{ padding: '80px 0', minHeight: '100vh', position: 'relative' }}>
      {/* Confetti Animation */}
      <AnimatePresence>
        {showConfetti && (
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
              pointerEvents: 'none',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  y: 0, 
                  x: 0, 
                  scale: 0,
                  rotate: 0
                }}
                animate={{ 
                  y: [0, Math.random() * -500 - 200],
                  x: [0, (Math.random() - 0.5) * 600],
                  scale: [0, 1, 0.5],
                  rotate: [0, Math.random() * 720]
                }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                style={{
                  position: 'absolute',
                  fontSize: '2rem'
                }}
              >
                {['🎉', '✨', '🌟', '💫', '⭐', '🎊', '💥'][Math.floor(Math.random() * 7)]}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

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
              background: 'linear-gradient(135deg, #A66CFF, #FF9ECD)',
              padding: '8px 20px',
              borderRadius: '25px',
              fontSize: '14px',
              fontWeight: 600,
              color: 'white',
              marginBottom: '15px'
            }}
          >
            💬 Your Voice Matters
          </motion.span>
          <h2 className="section-title mx-auto" style={{ display: 'table' }}>
            Share Your Feedback
          </h2>
          <p style={{ color: '#636E72', maxWidth: '600px', margin: '20px auto' }}>
            Help us improve! Your feedback shapes the future of EduVerse.
          </p>
        </motion.div>

        <Row className="justify-content-center">
          <Col lg={8}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <Card
                    className="border-0 text-center"
                    style={{
                      borderRadius: '30px',
                      padding: '60px 40px',
                      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircleIcon style={{ fontSize: 100, color: '#4ECDC4' }} />
                    </motion.div>
                    <h2 style={{ fontWeight: 700, marginTop: '20px', marginBottom: '15px' }}>
                      Thank You! 🎉
                    </h2>
                    <p style={{ color: '#636E72', fontSize: '1.1rem', marginBottom: '30px' }}>
                      Your feedback has been submitted successfully. We truly appreciate your time!
                    </p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        onClick={resetForm}
                        style={{
                          background: 'linear-gradient(135deg, #A66CFF, #FF9ECD)',
                          border: 'none',
                          borderRadius: '25px',
                          padding: '15px 40px',
                          fontWeight: 700,
                          fontSize: '1rem'
                        }}
                      >
                        Submit Another Feedback
                      </Button>
                    </motion.div>
                  </Card>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                >
                  <Card
                    className="border-0"
                    style={{
                      borderRadius: '30px',
                      overflow: 'hidden',
                      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    {/* Card Header */}
                    <div
                      style={{
                        background: 'linear-gradient(135deg, #A66CFF, #FF9ECD)',
                        padding: '30px',
                        textAlign: 'center'
                      }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{ fontSize: '3rem', marginBottom: '10px' }}
                      >
                        💭
                      </motion.div>
                      <h4 style={{ color: 'white', fontWeight: 700, margin: 0 }}>
                        We'd Love to Hear From You!
                      </h4>
                    </div>

                    <Card.Body style={{ padding: '40px' }}>
                      <Form onSubmit={handleSubmit}>
                        <Row className="g-4">
                          {/* Name & Email */}
                          <Col md={6}>
                            <ArcadeTextEffect
                              label="Your Name"
                              name="name"
                              type="text"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Enter your name"
                            />
                          </Col>
                          <Col md={6}>
                            <ArcadeTextEffect
                              label="Email Address"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="Enter your email"
                            />
                          </Col>

                          {/* Course Selection */}
                          {enrolledCourses.length > 0 && (
                            <Col xs={12}>
                              <Form.Label style={{ fontWeight: 600, marginBottom: '10px' }}>
                                Select Course (Optional)
                              </Form.Label>
                              <Form.Select
                                name="course"
                                value={formData.course}
                                onChange={handleInputChange}
                                style={{
                                  borderRadius: '12px',
                                  padding: '15px',
                                  border: '2px solid #E0E0E0'
                                }}
                              >
                                <option value="">General Feedback</option>
                                {enrolledCourses.map(course => (
                                  <option key={course.id} value={course.id}>
                                    {course.title}
                                  </option>
                                ))}
                              </Form.Select>
                            </Col>
                          )}

                          {/* Category Selection */}
                          <Col xs={12}>
                            <Form.Label style={{ fontWeight: 600, marginBottom: '15px' }}>
                              Feedback Category
                            </Form.Label>
                            <div className="d-flex flex-wrap gap-2">
                              {feedbackCategories.map((cat) => (
                                <motion.div
                                  key={cat.label}
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <Chip
                                    label={`${cat.emoji} ${cat.label}`}
                                    onClick={() => setFormData({ ...formData, category: cat.label })}
                                    sx={{
                                      backgroundColor: formData.category === cat.label ? '#A66CFF' : '#F5F5F5',
                                      color: formData.category === cat.label ? 'white' : '#2D3436',
                                      fontWeight: 600,
                                      padding: '20px 8px',
                                      fontSize: '14px',
                                      '&:hover': {
                                        backgroundColor: formData.category === cat.label ? '#A66CFF' : '#E8E8E8'
                                      }
                                    }}
                                  />
                                </motion.div>
                              ))}
                            </div>
                          </Col>

                          {/* Rating */}
                          <Col xs={12}>
                            <Form.Label style={{ fontWeight: 600, marginBottom: '15px' }}>
                              Overall Satisfaction
                            </Form.Label>
                            <div className="d-flex justify-content-center">
                              <div className="d-flex gap-3">
                                {[1, 2, 3, 4, 5].map((value) => (
                                  <motion.button
                                    key={value}
                                    type="button"
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setFormData({ ...formData, rating: value })}
                                    style={{
                                      background: 'none',
                                      border: 'none',
                                      cursor: 'pointer',
                                      opacity: formData.rating >= value ? 1 : 0.3,
                                      transition: 'all 0.3s ease',
                                      color: value <= 2 ? '#FF6B6B' : value === 3 ? '#FFE66D' : '#4ECDC4'
                                    }}
                                  >
                                    {customIcons[value].icon}
                                  </motion.button>
                                ))}
                              </div>
                            </div>
                            <p className="text-center mt-2" style={{ color: '#636E72' }}>
                              {customIcons[formData.rating]?.label}
                            </p>
                          </Col>

                          {/* Experience Slider */}
                          <Col xs={12}>
                            <Form.Label style={{ fontWeight: 600, marginBottom: '15px' }}>
                              How likely are you to recommend EduVerse? ({formData.experience}/10)
                            </Form.Label>
                            <Slider
                              value={formData.experience}
                              onChange={(e, value) => setFormData({ ...formData, experience: value })}
                              min={1}
                              max={10}
                              marks
                              sx={{
                                color: formData.experience < 4 ? '#FF6B6B' : 
                                       formData.experience < 7 ? '#FFE66D' : '#4ECDC4',
                                '& .MuiSlider-thumb': {
                                  width: 24,
                                  height: 24
                                },
                                '& .MuiSlider-markLabel': {
                                  fontSize: '12px'
                                }
                              }}
                            />
                          </Col>

                          {/* Feedback Textarea */}
                          <Col xs={12}>
                            <ArcadeTextEffect
                              label="Your Feedback"
                              name="feedback"
                              value={formData.feedback}
                              onChange={handleInputChange}
                              placeholder="Tell us about your experience..."
                              multiline
                              rows={4}
                            />
                          </Col>

                          {/* Suggestions Textarea */}
                          <Col xs={12}>
                            <ArcadeTextEffect
                              label="Suggestions for Improvement"
                              name="suggestions"
                              value={formData.suggestions}
                              onChange={handleInputChange}
                              placeholder="How can we make EduVerse better?"
                              multiline
                              rows={3}
                            />
                          </Col>

                          {/* Submit Button */}
                          <Col xs={12}>
                            <motion.div
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Button
                                type="submit"
                                className="w-100"
                                style={{
                                  background: 'linear-gradient(135deg, #A66CFF, #FF9ECD)',
                                  border: 'none',
                                  borderRadius: '20px',
                                  padding: '18px',
                                  fontWeight: 700,
                                  fontSize: '1.1rem',
                                  boxShadow: '0 10px 30px rgba(166, 108, 255, 0.4)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  gap: '10px'
                                }}
                              >
                                <SendIcon />
                                Submit Feedback
                              </Button>
                            </motion.div>
                          </Col>
                        </Row>
                      </Form>
                    </Card.Body>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeedbackSection;
