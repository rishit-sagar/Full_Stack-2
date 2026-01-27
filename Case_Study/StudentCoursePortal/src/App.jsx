import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import AnimatedDoodles from './components/AnimatedDoodles';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import CourseList from './components/CourseList';
import EnrolledCourses from './components/EnrolledCourses';
import FeedbackSection from './components/FeedbackSection';
import Footer from './components/Footer';
import LoginPromptDialog from './components/LoginPromptDialog';
import AuthModal from './components/AuthModal';
import PixelCat from './components/PixelCat';

// Theme creator function
const getTheme = (isDark) => createTheme({
  palette: {
    mode: isDark ? 'dark' : 'light',
    primary: {
      main: '#A66CFF',
      light: '#B88AFF',
      dark: '#8B5CF6'
    },
    secondary: {
      main: '#FF6B6B',
      light: '#FF8E8E',
      dark: '#E55A5A'
    },
    background: {
      default: isDark ? '#1A1A2E' : '#FFF9F0',
      paper: isDark ? '#1F1F38' : '#FFFFFF'
    },
    text: {
      primary: isDark ? '#EAEAEA' : '#2D3436',
      secondary: isDark ? '#B0B0B0' : '#636E72'
    }
  },
  typography: {
    fontFamily: "'Space Grotesk', sans-serif",
    h1: {
      fontWeight: 800
    },
    h2: {
      fontWeight: 700
    },
    h3: {
      fontWeight: 700
    },
    button: {
      textTransform: 'none',
      fontWeight: 600
    }
  },
  shape: {
    borderRadius: 16
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
          padding: '10px 25px'
        }
      }
    }
  }
});

// Sample courses data
const coursesData = [
  {
    id: 1,
    title: 'React Mastery',
    description: 'Master modern React with hooks, context, and advanced patterns for building scalable applications.',
    instructor: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400',
    category: 'Frontend',
    rating: 4.9,
    students: 12500,
    duration: '24 hours',
    level: 'Intermediate',
    price: 49.99,
    tags: ['React', 'JavaScript', 'Hooks']
  },
  {
    id: 2,
    title: 'Node.js Backend Development',
    description: 'Build robust and scalable backend APIs with Node.js, Express, and MongoDB.',
    instructor: 'Michael Chen',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400',
    category: 'Backend',
    rating: 4.8,
    students: 9800,
    duration: '30 hours',
    level: 'Intermediate',
    price: 59.99,
    tags: ['Node.js', 'Express', 'MongoDB']
  },
  {
    id: 3,
    title: 'Python for Data Science',
    description: 'Learn Python programming for data analysis, visualization, and machine learning.',
    instructor: 'Emily Rodriguez',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400',
    category: 'Data Science',
    rating: 4.9,
    students: 15000,
    duration: '36 hours',
    level: 'Beginner',
    price: 69.99,
    tags: ['Python', 'Pandas', 'NumPy']
  },
  {
    id: 4,
    title: 'UI/UX Design Fundamentals',
    description: 'Master the principles of user interface and experience design for digital products.',
    instructor: 'Alex Kim',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400',
    category: 'Design',
    rating: 4.7,
    students: 7500,
    duration: '20 hours',
    level: 'Beginner',
    price: 44.99,
    tags: ['Figma', 'UI Design', 'UX']
  },
  {
    id: 5,
    title: 'Flutter Mobile Development',
    description: 'Create beautiful cross-platform mobile apps with Flutter and Dart.',
    instructor: 'David Park',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400',
    category: 'Mobile',
    rating: 4.8,
    students: 8200,
    duration: '28 hours',
    level: 'Intermediate',
    price: 54.99,
    tags: ['Flutter', 'Dart', 'Mobile']
  },
  {
    id: 6,
    title: 'Machine Learning with TensorFlow',
    description: 'Build and deploy machine learning models using TensorFlow and Keras.',
    instructor: 'Lisa Wang',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400',
    category: 'ML',
    rating: 4.9,
    students: 11000,
    duration: '40 hours',
    level: 'Advanced',
    price: 79.99,
    tags: ['TensorFlow', 'Keras', 'Deep Learning']
  }
];

function App() {
  // State
  const [user, setUser] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [notification, setNotification] = useState({ open: false, message: '', severity: 'success' });
  const [currentSection, setCurrentSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollBlur, setScrollBlur] = useState(0);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [loginPrompt, setLoginPrompt] = useState({ open: false, message: '' });
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  // Memoized theme based on dark mode
  const theme = useMemo(() => getTheme(isDarkMode), [isDarkMode]);

  // Apply dark mode to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Handle dark mode toggle
  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      
      // Calculate blur based on scroll position
      // Unblurred at top -> blur in cards area -> unblur after cards
      const coursesSection = document.getElementById('courses');
      const myLearningSection = document.getElementById('my-learning');
      
      let newBlur = 0;
      
      if (coursesSection && myLearningSection) {
        const coursesTop = coursesSection.offsetTop - 200; // Start blurring before courses
        const cardsEnd = myLearningSection.offsetTop + myLearningSection.offsetHeight;
        const scrollY = window.scrollY;
        const maxBlur = 8;
        const transitionDistance = 300; // pixels for blur transition
        
        if (scrollY < coursesTop) {
          // Before cards area - unblurred, but start blurring as we approach
          const distanceToCards = coursesTop - scrollY;
          if (distanceToCards < transitionDistance) {
            newBlur = maxBlur * (1 - distanceToCards / transitionDistance);
          } else {
            newBlur = 0;
          }
        } else if (scrollY >= coursesTop && scrollY <= cardsEnd) {
          // In cards area - blurred
          newBlur = maxBlur;
        } else if (scrollY > cardsEnd) {
          // After cards area - gradually unblur
          const distanceAfterCards = scrollY - cardsEnd;
          if (distanceAfterCards < transitionDistance) {
            newBlur = maxBlur * (1 - distanceAfterCards / transitionDistance);
          } else {
            newBlur = 0;
          }
        }
      }
      
      setScrollBlur(newBlur);
      
      // Update current section based on scroll position
      const sections = ['home', 'courses', 'my-learning', 'feedback'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Authentication handlers
  const handleLogin = (userData) => {
    setUser(userData);
    showNotification(`Welcome back, ${userData.name}! 🎉`, 'success');
  };

  const handleLogout = () => {
    setUser(null);
    setEnrolledCourses([]);
    showNotification('Successfully logged out. See you soon! 👋', 'info');
  };

  // Login prompt handler
  const showLoginPrompt = (message) => {
    setLoginPrompt({ open: true, message });
  };

  const closeLoginPrompt = () => {
    setLoginPrompt({ open: false, message: '' });
  };

  const openAuthModal = () => {
    setShowAuthModal(true);
  };

  // Course enrollment handlers
  const handleEnroll = (course) => {
    if (!user) {
      showLoginPrompt('Please login to enroll in courses and start your learning journey!');
      return;
    }

    if (enrolledCourses.find(c => c.id === course.id)) {
      showNotification('You are already enrolled in this course! 📚', 'info');
      return;
    }

    const enrolledCourse = {
      ...course,
      enrolledDate: new Date().toISOString(),
      progress: 0
    };

    setEnrolledCourses([...enrolledCourses, enrolledCourse]);
    showNotification(`Successfully enrolled in ${course.title}! 🎓`, 'success');
  };

  const handleContinueLearning = (courseId) => {
    // Simulate progress update
    setEnrolledCourses(prev => 
      prev.map(course => 
        course.id === courseId 
          ? { ...course, progress: Math.min(course.progress + 10, 100) }
          : course
      )
    );
    showNotification('Progress saved! Keep up the great work! 💪', 'success');
  };

  // Notification handler
  const showNotification = (message, severity = 'success') => {
    setNotification({ open: true, message, severity });
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigate to section
  const navigateToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app" style={{ minHeight: '100vh', backgroundColor: isDarkMode ? '#1A1A2E' : '#FFF9F0', transition: 'background-color 0.3s ease' }}>
        {/* Background Container with Blur */}
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            filter: `blur(${scrollBlur}px)`,
            WebkitFilter: `blur(${scrollBlur}px)`,
            transition: 'filter 0.2s ease',
            pointerEvents: 'none',
            zIndex: 0
          }}
        >
          <AnimatedDoodles />
        </div>

        {/* Navigation */}
        <NavigationBar 
          user={user} 
          onLogin={handleLogin} 
          onLogout={handleLogout}
          onAuthClick={openAuthModal}
          currentSection={currentSection}
          isDarkMode={isDarkMode}
          onToggleDarkMode={toggleDarkMode}
          onNavigate={navigateToSection}
        />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <section id="home">
            <HeroSection 
              user={user} 
              onExplore={() => navigateToSection('courses')}
              onGetStarted={() => navigateToSection('courses')}
            />
          </section>

          {/* Courses Section */}
          <section id="courses">
            <CourseList 
              courses={coursesData}
              enrolledCourses={enrolledCourses}
              onEnroll={handleEnroll}
              user={user}
            />
          </section>

          {/* My Learning Section */}
          <section id="my-learning">
            <EnrolledCourses 
              user={user}
              enrolledCourses={enrolledCourses}
              onContinue={handleContinueLearning}
              onExplore={() => navigateToSection('courses')}
            />
          </section>

          {/* Feedback Section */}
          <section id="feedback">
            <FeedbackSection 
              user={user}
              enrolledCourses={enrolledCourses}
            />
          </section>
        </main>

        {/* Footer */}
        <Footer />

        {/* Auth Modal */}
        <AuthModal 
          show={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          onLogin={(userData) => {
            handleLogin(userData);
            setShowAuthModal(false);
          }}
        />

        {/* Notification Snackbar */}
        <Snackbar
          open={notification.open}
          autoHideDuration={4000}
          onClose={handleCloseNotification}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={handleCloseNotification}
            severity={notification.severity}
            variant="filled"
            sx={{ 
              borderRadius: '15px',
              fontWeight: 600,
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)'
            }}
          >
            {notification.message}
          </Alert>
        </Snackbar>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                zIndex: 1000
              }}
            >
              <Fab
                onClick={scrollToTop}
                sx={{
                  background: 'linear-gradient(135deg, #FF6B6B, #A66CFF)',
                  color: 'white',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #FF8E8E, #B88AFF)'
                  },
                  boxShadow: '0 10px 30px rgba(166, 108, 255, 0.4)'
                }}
              >
                <KeyboardArrowUpIcon />
              </Fab>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Login Prompt Dialog */}
        <LoginPromptDialog
          open={loginPrompt.open}
          onClose={closeLoginPrompt}
          onLoginClick={openAuthModal}
          message={loginPrompt.message}
        />

        {/* Loading/Welcome Animation for first-time visitors */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, #FFE5EC 0%, #FFF0F5 50%, #E8F4FF 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            pointerEvents: 'none'
          }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <PixelCat size={120} animate={true} />
          </motion.div>
        </motion.div>
      </div>
    </ThemeProvider>
  );
}

export default App;
