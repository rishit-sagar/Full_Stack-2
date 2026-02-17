import { createContext, useMemo, useState } from 'react'

export const StudentContext = createContext(null)

export function StudentProvider({ children }) {
  const [studentName, setStudentName] = useState('Alex Johnson')
  const [attendanceCount, setAttendanceCount] = useState(0)

  const value = useMemo(() => ({
    studentName,
    attendanceCount,
    renameStudent: setStudentName,
    markPresent: () => setAttendanceCount((current) => current + 1),
    resetAttendance: () => setAttendanceCount(0),
  }), [studentName, attendanceCount])

  return (
    <StudentContext.Provider value={value}>
      {children}
    </StudentContext.Provider>
  )
}
