# 🎓 Student Course Portal

A modern, responsive web application for students to browse, enroll, and manage their courses. Built with React and styled using Material UI and Bootstrap.

---

## 📸 Screenshots

### 🏠 Home Page / Hero Section
![Hero Section](screenshots/hero-section.png)

### 📚 Course Listing
![Course List](screenshots/course-list.png)

### 📋 Enrolled Courses
![Enrolled Courses](screenshots/enrolled-courses.png)

### 💬 Feedback Section
![Feedback Section](screenshots/feedback-section.png)

### 🌙 Dark Mode
![Dark Mode](screenshots/dark-mode.png)

### 🔐 Authentication Modal
![Auth Modal](screenshots/auth-modal.png)

---

## ✨ Features

- 🏠 **Hero Section** - Engaging landing page with animated elements
- 📚 **Course Listing** - Browse available courses
- ✅ **Course Enrollment** - Enroll in courses with a single click
- 📋 **Enrolled Courses** - View and manage your enrolled courses
- 💬 **Feedback Section** - Submit and view course feedback
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 🔐 **Authentication** - Login/Signup modal for user access
- ✨ **Smooth Animations** - Polished UI with Framer Motion animations

---

## 🛠️ Tech Stack

| Technology | Description |
|------------|-------------|
| **React 18** | JavaScript library for building user interfaces |
| **Material UI (MUI)** | React component library with Material Design |
| **Bootstrap 5** | CSS framework for responsive layouts |
| **React Bootstrap** | Bootstrap components as React components |
| **Framer Motion** | Animation library for React |
| **Vite** | Fast build tool and development server |
| **ESLint** | Code linting and quality tool |

---

## 🧩 Component Tech Stack

| Component | React Bootstrap | Material UI | Framer Motion | Notes |
|-----------|:---------------:|:-----------:|:-------------:|-------|
| **AnimatedDoodles** | ❌ | ❌ | ✅ | Pure animation component |
| **ArcadeTextEffect** | ❌ | ✅ | ✅ | MUI TextField with animations |
| **AuthModal** | ✅ | ✅ | ✅ | Uses PixelCat, ArcadeTextEffect |
| **CourseList** | ✅ | ✅ | ✅ | Cards, Rating, Chips |
| **DarkModeToggle** | ❌ | ❌ | ✅ | Simple toggle animation |
| **EnrolledCourses** | ✅ | ✅ | ✅ | Progress indicators |
| **FeedbackSection** | ✅ | ✅ | ✅ | Slider, Sentiment icons |
| **Footer** | ✅ | ✅ | ✅ | Social icons, TextField |
| **HeroSection** | ✅ | ✅ | ✅ | Layout + icons |
| **LoginPromptDialog** | ✅ | ✅ | ✅ | Modal with icons |
| **NavigationBar** | ✅ | ✅ | ✅ | Uses PixelCat |
| **PixelCat** | ❌ | ❌ | ✅ | Custom SVG mascot |

### What Each Library Provides

- **React Bootstrap**: Grid system (`Container`, `Row`, `Col`), UI components (`Card`, `Button`, `Form`, `Navbar`)
- **Material UI**: Advanced components (`TextField`, `Slider`, `Rating`, `Chip`), Icons, Feedback components (`Snackbar`, `Alert`)
- **Framer Motion**: All animations (`motion.div`, `AnimatePresence`, `whileHover`, `whileTap`)

---

## 📁 Project Structure

```
StudentCoursePortal/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── AnimatedDoodles.jsx
│   │   ├── ArcadeTextEffect.jsx
│   │   ├── AuthModal.jsx
│   │   ├── CourseList.jsx
│   │   ├── DarkModeToggle.jsx
│   │   ├── EnrolledCourses.jsx
│   │   ├── FeedbackSection.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   └── NavigationBar.jsx
│   ├── App.jsx          # Main App component
│   ├── App.css          # App styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies & scripts
└── vite.config.js       # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd StudentCoursePortal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint for code quality |

---

## 🎨 UI Libraries Used

### Material UI
- Pre-built components (Buttons, Cards, Modals)
- Material Design icons
- Theming support

### Bootstrap
- Responsive grid system
- Utility classes
- Mobile-first design

### Framer Motion
- Page transitions
- Component animations
- Hover effects

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

Developed with ❤️ for learning and education purposes.
