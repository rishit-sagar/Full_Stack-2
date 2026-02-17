import { useContext } from 'react'
import { StudentContext } from '../context/StudentContext.jsx'

export function StudentDetails() {
  const { studentName, attendanceCount } = useContext(StudentContext)

  return (
    <section className="panel">
      <h2>Student Overview</h2>
      <p><strong>Name:</strong> {studentName}</p>
      <p><strong>Sessions Attended:</strong> {attendanceCount}</p>
    </section>
  )
}
