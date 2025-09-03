import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import cartReducer from "../features/cart/CartSlice.js";
import productsReducer from "../features/products/ProductsSlice.js";
import { mySaga } from "../features/cart/cartSaga.js";
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    product: productsReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(mySaga)
