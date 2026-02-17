import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { store } from './store/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <CartProvider>
        <App />
      </CartProvider>
    </ReduxProvider>
  </StrictMode>,
)
