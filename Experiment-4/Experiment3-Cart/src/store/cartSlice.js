import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: {},
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const productId = action.payload
      state.items[productId] = (state.items[productId] ?? 0) + 1
    },
    removeItem: (state, action) => {
      const productId = action.payload
      if (!state.items[productId]) return
      if (state.items[productId] === 1) {
        delete state.items[productId]
      } else {
        state.items[productId] -= 1
      }
    },
    clearCart: () => initialState,
  },
})

export const { addItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer
