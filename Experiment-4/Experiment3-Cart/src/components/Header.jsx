import { useSelector } from 'react-redux'
import { useCartContext } from '../context/CartContext.jsx'

export function Header() {
  const { totalItems } = useCartContext()
  const reduxItems = useSelector((state) => state.cart.items)
  const reduxCount = Object.values(reduxItems).reduce((sum, quantity) => sum + quantity, 0)

  const comparison = totalItems === reduxCount
    ? 'Both counters match right now.'
    : 'The counters are different because the data lives in two places.'

  return (
    <header className="app-header">
      <h1>Context API vs Redux Cart</h1>
      <p>Same products, two ways to store the cart.</p>
      <div className="badge-row">
        <span className="badge">Context items: {totalItems}</span>
        <span className="badge">Redux items: {reduxCount}</span>
      </div>
      <p className="comparison-note">{comparison}</p>
    </header>
  )
}
