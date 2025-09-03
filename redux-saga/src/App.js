import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Cart } from "./features/cart/Cart";
import { fetchAsync } from "./features/cart/CartSlice";
import { Products } from "./features/products/Products";

function App() {
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);
  const item = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(fetchAsync());
  }, []);
  return (
    <div className="App">
      <button onClick={() => setShowCart(!showCart)}>
        {showCart ? "Hide Cart" : "Show Cart"} {item.length}
      </button>
      {showCart ? <Cart /> : <Products />}
      {/* <Cart /> */}
      {/* <Products /> */}
    </div>
  );
}

export default App;
