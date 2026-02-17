import { useContext, useState } from 'react'
import { StudentContext } from '../context/StudentContext.jsx'

export function AttendanceControls() {
  const { renameStudent, markPresent, resetAttendance } = useContext(StudentContext)
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!inputValue.trim()) return
    renameStudent(inputValue.trim())
    setInputValue('')
  }

  return (
    <section className="panel">
      <h2>Update Student</h2>
      <form onSubmit={handleSubmit} className="rename-form">
        <label htmlFor="student-name">Change name</label>
        <div className="form-row">
          <input
            id="student-name"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="Enter new name"
          />
          <button type="submit">Save</button>
        </div>
      </form>
      <div className="actions">
        <button onClick={markPresent}>Mark Present</button>
        <button type="button" onClick={resetAttendance} className="secondary">
          Reset Count
        </button>
      </div>
    </section>
  )
}
