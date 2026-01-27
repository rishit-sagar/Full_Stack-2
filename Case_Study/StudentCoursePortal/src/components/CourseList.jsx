import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { Chip, Rating, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const courses = [
  {
    id: 1,
    title: 'React Mastery',
    description: 'Build modern web applications with React, hooks, and state management.',
    instructor: 'Sarah Johnson',
    duration: '24 hours',
    level: 'Intermediate',
    rating: 4.8,
    students: 12500,
    price: 'Free',
    image: '⚛️',
    color: '#61DAFB',
    tags: ['Frontend', 'JavaScript', 'Web Dev']
  },
  {
    id: 2,
    title: 'Python for Data Science',
    description: 'Master Python programming for data analysis, visualization, and ML.',
    instructor: 'Dr. Michael Chen',
    duration: '32 hours',
    level: 'Beginner',
    rating: 4.9,
    students: 28000,
    price: 'Free',
    image: '🐍',
    color: '#3776AB',
    tags: ['Data Science', 'Python', 'ML']
  },
  {
    id: 3,
    title: 'UI/UX Design Fundamentals',
    description: 'Learn design principles, Figma, and create stunning user interfaces.',
    instructor: 'Emma Williams',
    duration: '18 hours',
    level: 'Beginner',
    rating: 4.7,
    students: 8900,
    price: 'Free',
    image: '🎨',
    color: '#FF6B6B',
    tags: ['Design', 'Figma', 'UI/UX']
  },
  {
    id: 4,
    title: 'Node.js Backend Development',
    description: 'Build scalable server-side applications with Node.js and Express.',
    instructor: 'James Miller',
    duration: '28 hours',
    level: 'Intermediate',
    rating: 4.6,
    students: 15600,
    price: 'Free',
    image: '🟢',
    color: '#339933',
    tags: ['Backend', 'Node.js', 'API']
  },
  {
    id: 5,
    title: 'Machine Learning A-Z',
    description: 'Complete guide to ML algorithms, neural networks, and deep learning.',
    instructor: 'Dr. Lisa Park',
    duration: '45 hours',
    level: 'Advanced',
    rating: 4.9,
    students: 32000,
    price: 'Free',
    image: '🤖',
    color: '#A66CFF',
    tags: ['ML', 'AI', 'Deep Learning']
  },
  {
    id: 6,
    title: 'Mobile App Development',
    description: 'Create cross-platform mobile apps with React Native and Flutter.',
    instructor: 'Alex Thompson',
    duration: '36 hours',
    level: 'Intermediate',
    rating: 4.7,
    students: 11200,
    price: 'Free',
    image: '📱',
    color: '#4ECDC4',
    tags: ['Mobile', 'React Native', 'Flutter']
  }
];

const categories = ['All', 'Frontend', 'Backend', 'Data Science', 'Design', 'Mobile', 'ML'];

const CourseList = ({ user, enrolledCourses, onEnroll, onUnenroll }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [savedCourses, setSavedCourses] = useState([]);

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || 
                            course.tags.some(tag => tag.toLowerCase().includes(selectedCategory.toLowerCase()));
    return matchesSearch && matchesCategory;
  });

  const toggleSave = (courseId) => {
    setSavedCourses(prev => 
      prev.includes(courseId) 
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  const isEnrolled = (courseId) => enrolledCourses.some(c => c.id === courseId);

  return (
    <section id="courses" style={{ padding: '80px 0', minHeight: '100vh' }}>
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
              background: 'linear-gradient(135deg, #4ECDC4, #45B7D1)',
              padding: '8px 20px',
              borderRadius: '25px',
              fontSize: '14px',
              fontWeight: 600,
              color: 'white',
              marginBottom: '15px'
            }}
          >
            📚 Browse Courses
          </motion.span>
          <h2 className="section-title mx-auto" style={{ display: 'table' }}>
            Explore Our Courses
          </h2>
          <p style={{ color: '#636E72', maxWidth: '600px', margin: '20px auto' }}>
            Discover world-class courses taught by industry experts. Start your learning journey today!
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-5"
        >
          <Row className="justify-content-center align-items-center g-3">
            <Col md={6}>
              <TextField
                fullWidth
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon style={{ color: '#A66CFF' }} />
                    </InputAdornment>
                  ),
                  style: { borderRadius: '25px' }
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '25px',
                    backgroundColor: 'white',
                    '&:hover fieldset': { borderColor: '#A66CFF' },
                    '&.Mui-focused fieldset': { borderColor: '#FF6B6B' }
                  }
                }}
              />
            </Col>
          </Row>

          {/* Category Chips */}
          <div className="d-flex justify-content-center flex-wrap gap-2 mt-4">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Chip
                  label={category}
                  onClick={() => setSelectedCategory(category)}
                  sx={{
                    backgroundColor: selectedCategory === category ? '#FF6B6B' : 'white',
                    color: selectedCategory === category ? 'white' : '#2D3436',
                    fontWeight: 600,
                    padding: '20px 10px',
                    fontSize: '14px',
                    border: selectedCategory === category ? 'none' : '2px solid #E0E0E0',
                    '&:hover': {
                      backgroundColor: selectedCategory === category ? '#FF6B6B' : '#FFF0F0'
                    }
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Course Grid */}
        <Row className="g-4">
          <AnimatePresence>
            {filteredCourses.map((course, index) => (
              <Col key={course.id} lg={4} md={6}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ y: -10 }}
                >
                  <Card 
                    className="h-100 border-0"
                    style={{ 
                      borderRadius: '24px',
                      overflow: 'hidden',
                      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {/* Course Header */}
                    <div 
                      style={{ 
                        background: `linear-gradient(135deg, ${course.color}20, ${course.color}40)`,
                        padding: '30px',
                        position: 'relative'
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                        style={{
                          fontSize: '4rem',
                          textAlign: 'center'
                        }}
                      >
                        {course.image}
                      </motion.div>

                      {/* Save Button */}
                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => toggleSave(course.id)}
                        style={{
                          position: 'absolute',
                          top: '15px',
                          right: '15px',
                          background: 'white',
                          border: 'none',
                          borderRadius: '50%',
                          width: '40px',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          boxShadow: '0 3px 10px rgba(0,0,0,0.1)'
                        }}
                      >
                        {savedCourses.includes(course.id) ? (
                          <BookmarkIcon style={{ color: '#FF6B6B' }} />
                        ) : (
                          <BookmarkBorderIcon style={{ color: '#636E72' }} />
                        )}
                      </motion.button>

                      {/* Level Badge */}
                      <Badge
                        bg=""
                        style={{
                          position: 'absolute',
                          top: '15px',
                          left: '15px',
                          backgroundColor: course.color,
                          padding: '8px 15px',
                          borderRadius: '15px',
                          fontWeight: 600
                        }}
                      >
                        {course.level}
                      </Badge>
                    </div>

                    <Card.Body style={{ padding: '25px' }}>
                      <Card.Title 
                        style={{ 
                          fontWeight: 700, 
                          fontSize: '1.3rem',
                          marginBottom: '10px'
                        }}
                      >
                        {course.title}
                      </Card.Title>
                      
                      <Card.Text style={{ color: '#636E72', fontSize: '0.95rem' }}>
                        {course.description}
                      </Card.Text>

                      {/* Tags */}
                      <div className="d-flex flex-wrap gap-2 my-3">
                        {course.tags.map(tag => (
                          <span
                            key={tag}
                            style={{
                              backgroundColor: '#F5F5F5',
                              padding: '5px 12px',
                              borderRadius: '12px',
                              fontSize: '0.8rem',
                              fontWeight: 500,
                              color: '#636E72'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Course Info */}
                      <div className="d-flex align-items-center gap-3 mb-3">
                        <div className="d-flex align-items-center">
                          <AccessTimeIcon style={{ fontSize: 18, color: '#A66CFF', marginRight: 5 }} />
                          <span style={{ fontSize: '0.9rem', color: '#636E72' }}>{course.duration}</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <PersonIcon style={{ fontSize: 18, color: '#4ECDC4', marginRight: 5 }} />
                          <span style={{ fontSize: '0.9rem', color: '#636E72' }}>{course.students.toLocaleString()}</span>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="d-flex align-items-center mb-3">
                        <Rating 
                          value={course.rating} 
                          precision={0.1} 
                          readOnly 
                          size="small"
                          sx={{ color: '#FFE66D' }}
                        />
                        <span style={{ marginLeft: 8, fontWeight: 600, color: '#2D3436' }}>
                          {course.rating}
                        </span>
                      </div>

                      {/* Instructor */}
                      <div 
                        className="d-flex align-items-center p-3 mb-3"
                        style={{
                          backgroundColor: '#F8F9FA',
                          borderRadius: '15px'
                        }}
                      >
                        <div
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: `linear-gradient(135deg, ${course.color}, ${course.color}80)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '12px'
                          }}
                        >
                          <PersonIcon style={{ color: 'white', fontSize: 20 }} />
                        </div>
                        <div>
                          <div style={{ fontSize: '0.85rem', color: '#636E72' }}>Instructor</div>
                          <div style={{ fontWeight: 600 }}>{course.instructor}</div>
                        </div>
                      </div>

                      {/* Price & Enroll Button */}
                      <div className="d-flex align-items-center justify-content-between">
                        <span 
                          style={{ 
                            fontSize: '1.5rem', 
                            fontWeight: 800,
                            color: '#4ECDC4'
                          }}
                        >
                          {course.price}
                        </span>
                        
                        {user ? (
                          isEnrolled(course.id) ? (
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Button
                                onClick={() => onUnenroll(course.id)}
                                style={{
                                  background: 'linear-gradient(135deg, #636E72, #2D3436)',
                                  border: 'none',
                                  borderRadius: '20px',
                                  padding: '12px 25px',
                                  fontWeight: 600,
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '8px'
                                }}
                              >
                                ✓ Enrolled
                              </Button>
                            </motion.div>
                          ) : (
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Button
                                onClick={() => onEnroll(course)}
                                style={{
                                  background: `linear-gradient(135deg, ${course.color}, ${course.color}CC)`,
                                  border: 'none',
                                  borderRadius: '20px',
                                  padding: '12px 25px',
                                  fontWeight: 600,
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '8px'
                                }}
                              >
                                <PlayCircleIcon style={{ fontSize: 20 }} />
                                Enroll Now
                              </Button>
                            </motion.div>
                          )
                        ) : (
                          <Button
                            disabled
                            style={{
                              backgroundColor: '#E0E0E0',
                              border: 'none',
                              borderRadius: '20px',
                              padding: '12px 25px',
                              fontWeight: 600
                            }}
                          >
                            Login to Enroll
                          </Button>
                        )}
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </AnimatePresence>
        </Row>

        {filteredCourses.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-5"
          >
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🔍</div>
            <h4 style={{ color: '#636E72' }}>No courses found</h4>
            <p style={{ color: '#A0A0A0' }}>Try adjusting your search or filter</p>
          </motion.div>
        )}
      </Container>
    </section>
  );
};

export default CourseList;
