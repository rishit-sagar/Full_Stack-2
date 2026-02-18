import { Suspense, lazy } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'

// Lazily load route components so they only download when visited.
const Home = lazy(() => import('./pages/Home.jsx'))
const Students = lazy(() => import('./pages/Students.jsx'))
const Notices = lazy(() => import('./pages/Notices.jsx'))

function App() {
  return (
    <div className="app-shell">
      <nav className="menu">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}
        >
          Home
        </NavLink>
        <NavLink
          to="/students"
          className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}
        >
          Students
        </NavLink>
        <NavLink
          to="/notices"
          className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}
        >
          Notices
        </NavLink>
      </nav>

      <Suspense fallback={<p className="fallback">Loading route...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/notices" element={<Notices />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
