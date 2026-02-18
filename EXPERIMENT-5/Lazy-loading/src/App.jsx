import './App.css';
import { lazy, Suspense, useState } from 'react';

const Dashboard = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('./Components/Dashboard.jsx'));
    }, 2000); // wait 2 seconds before loading
  })
);
const Students = lazy(() => import('./Components/Students.jsx'));
const Notices = lazy(() => import('./Components/Notices.jsx'));

function App() {
  const [section, setSection] = useState('dashboard');

  const renderSection = () => {
    switch (section) {
      case 'students':
        return <Students />;
      case 'notices':
        return <Notices />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app">
      <h1>Simple Dashboard Demo</h1>
      <p className="subtitle">Switch between sections to see lazy loading in action.</p>

      <div className="tab-buttons">
        <button
          type="button"
          className={section === 'dashboard' ? 'tab-button active' : 'tab-button'}
          onClick={() => setSection('dashboard')}
        >
          Dashboard
        </button>
        <button
          type="button"
          className={section === 'students' ? 'tab-button active' : 'tab-button'}
          onClick={() => setSection('students')}
        >
          Students
        </button>
        <button
          type="button"
          className={section === 'notices' ? 'tab-button active' : 'tab-button'}
          onClick={() => setSection('notices')}
        >
          Notices
        </button>
      </div>

      <Suspense fallback={<div className="loading-box">Loading section...</div>}>
        {renderSection()}
      </Suspense>
    </div>
  );
}


export default App;
