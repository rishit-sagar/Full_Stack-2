import { useDispatch, useSelector } from 'react-redux'
import { PRODUCTS } from '../data/products.js'
import { addItem, removeItem, clearCart } from '../store/cartSlice.js'

export function ReduxCart() {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart.items)
  const totalItems = Object.values(items).reduce((sum, quantity) => sum + quantity, 0)

  return (
    <section className="panel">
      <h2>Redux Cart</h2>
      <p className="panel-subtitle">Redux Toolkit handles the same cart with a store.</p>
      <div className="product-grid">
        {PRODUCTS.map((product) => {
          const quantity = items[product.id] ?? 0
          return (
            <article key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p className="price">${product.price.toFixed(2)}</p>
              <p className="quantity">In cart: {quantity}</p>
              <div className="card-actions">
                <button onClick={() => dispatch(addItem(product.id))}>Add</button>
                <button
                  onClick={() => dispatch(removeItem(product.id))}
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
        <button
          onClick={() => dispatch(clearCart())}
          className="secondary"
          disabled={totalItems === 0}
        >
          Clear cart
        </button>
      </footer>
    </section>
  )
}
