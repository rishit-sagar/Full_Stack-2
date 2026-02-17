import './App.css'
import { ContextCart } from './components/ContextCart.jsx'
import { Header } from './components/Header.jsx'
import { ReduxCart } from './components/ReduxCart.jsx'

function App() {
  return (
    <main className="app">
      <Header />
      <div className="comparison-grid">
        <ContextCart />
        <ReduxCart />
      </div>
    </main>
  )
}

export default App
