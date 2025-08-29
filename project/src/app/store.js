import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/ProductsSlice.js';
import cartReducer from '../features/cart/CartSlice.js';

export const store = configureStore({
  reducer: {
    product: productsReducer,
    cart: cartReducer,
  },
});
