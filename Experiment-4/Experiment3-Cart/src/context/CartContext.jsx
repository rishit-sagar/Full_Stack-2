import { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState({})

  const addItem = (productId) => {
    setItems((current) => {
      const next = { ...current }
      next[productId] = (next[productId] ?? 0) + 1
      return next
    })
  }

  const removeItem = (productId) => {
    setItems((current) => {
      if (!current[productId]) return current
      const next = { ...current }
      if (next[productId] === 1) {
        delete next[productId]
      } else {
        next[productId] -= 1
      }
      return next
    })
  }

  const clearCart = () => setItems({})

  const totalItems = Object.values(items).reduce((sum, quantity) => sum + quantity, 0)

  return (
    <CartContext.Provider value={{ items, totalItems, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider')
  }
  return context
}
