import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function TodoApp() {
  const [tasks, setTasks] = useState([]); // List of tasks
  const [input, setInput] = useState(''); // Current input value

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]); // Add new task to the array
      setInput(''); // Clear input field
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index)); // Remove task by index
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Simple To-Do List</h2>
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Enter a task..." 
      />
      <button onClick={addTask}>Add</button>
      
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp
