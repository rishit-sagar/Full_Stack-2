import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './store/counterSlice.js'
import { useState } from 'react'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [step, setStep] = useState(5)

  return (
    <main className="app">
      <header>
        <h1>Redux Counter</h1>
        <p>
          A minimal example of centralized state using Redux Toolkit. The
          buttons below dispatch actions that update the global store.
        </p>
      </header>

      <section className="panel">
        <p className="counter-label">Current value</p>
        <p className="counter-value">{count}</p>
        <div className="actions">
          <button onClick={() => dispatch(decrement())}>-1</button>
          <button onClick={() => dispatch(reset())} className="secondary">
            Reset
          </button>
          <button onClick={() => dispatch(increment())}>+1</button>
        </div>
      </section>

      <section className="panel">
        <h2>Increment by custom amount</h2>
        <form
          className="step-form"
          onSubmit={(event) => {
            event.preventDefault()
            dispatch(incrementByAmount(Number(step) || 0))
          }}
        >
          <label htmlFor="step-input">Amount</label>
          <div className="form-row">
            <input
              id="step-input"
              type="number"
              value={step}
              onChange={(event) => setStep(event.target.value)}
              min="-20"
              max="20"
            />
            <button type="submit">Apply</button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default App
