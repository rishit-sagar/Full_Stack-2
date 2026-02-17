import { PRODUCTS } from '../data/products.js'
import { useCartContext } from '../context/CartContext.jsx'

export function ContextCart() {
  const { items, totalItems, addItem, removeItem, clearCart } = useCartContext()

  return (
    <section className="panel">
      <h2>Context Cart</h2>
      <p className="panel-subtitle">React Context keeps a simple shared cart.</p>
      <div className="product-grid">
        {PRODUCTS.map((product) => {
          const quantity = items[product.id] ?? 0
          return (
            <article key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p className="price">${product.price.toFixed(2)}</p>
              <p className="quantity">In cart: {quantity}</p>
              <div className="card-actions">
                <button onClick={() => addItem(product.id)}>Add</button>
                <button
                  onClick={() => removeItem(product.id)}
                  className="secondary"
                  disabled={quantity === 0}
                >
                  Remove
                </button>
              </div>
            </article>
          )
        })}
      </div>
      <footer className="panel-footer">
        <span>Total items: {totalItems}</span>
        <button onClick={clearCart} className="secondary" disabled={totalItems === 0}>
          Clear cart
        </button>
      </footer>
    </section>
  )
}
