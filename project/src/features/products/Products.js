import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAsync } from "../cart/CartSlice.js";
import "./Products.css";
import { fetchAsync } from "./ProductsSlice.js";

export function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(fetchAsync());
  }, []);

  return (
    <div>
      <div>
        {products?.map((product) => (
          <div className="card">
            <img
              src={product?.thumbnail}
              alt="Denim Jeans"
              style={{ width: "100%" }}
            />
            <h1>{product.title}</h1>
            <p className="price">{product.price}</p>
            <p>{product.description}</p>
            <p>
              <button onClick={() => dispatch(addAsync(product))}>
                Add to Cart
              </button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
