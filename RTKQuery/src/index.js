import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { adminApi } from "./api/adminSlice";
import App from "./App";
import "./index.css";
import rewardReducer from "./reducers/reward";
import reportWebVitals from "./reportWebVitals";
import accountReducer from "./slices/accountSlice";
import bonusReducer from "./slices/bonusSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore({
  reducer: {
    account: accountReducer,
    bonus: bonusReducer,
    reward: rewardReducer,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    // RTK caching and other Features are dependent on this
    getDefaultMiddleware().concat(adminApi.middleware),
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
