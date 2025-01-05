import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Reducer to add an item to the cart
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem) {
        // If item already exists, increase its quantity
        existingItem.quantity += 1;
      } else {
        // If item does not exist, add it with quantity 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    // Reducer to remove an item from the cart
    removeItem: (state, action) => {
      // Filter out the item to be removed
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },

    // Reducer to update the quantity of an item in the cart
    updateQuantity: (state, action) => {
      const { name, amount } = action.payload; // Extract name and amount from action payload
      const item = state.items.find(item => item.name === name);
      if (item) {
        item.quantity = amount; // Update the quantity
      }
    },
  },
});

// Export the actions to use in other components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer as default for store configuration
export default CartSlice.reducer;
