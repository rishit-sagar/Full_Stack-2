import './App.css'
import { AttendanceControls } from './components/AttendanceControls.jsx'
import { StudentDetails } from './components/StudentDetails.jsx'

function App() {
  return (
    <main className="app">
      <header>
        <h1>Class Attendance Tracker</h1>
        <p>
          This example shares student data with the React Context API so every
          component sees the same state without prop drilling.
        </p>
      </header>
      <div className="content">
        <StudentDetails />
        <AttendanceControls />
      </div>
    </main>
  )
}

export default App
