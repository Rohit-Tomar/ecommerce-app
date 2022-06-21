import { useState, useEffect, useCallback } from "react";

import classes from "./AllProducts.module.css";
import SingleProduct from "../SingleProduct/SingleProduct";
import { useDispatch, useSelector } from "react-redux";

const AllProducts = props => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const products = useSelector(store => store.productReducer.allProducts);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Something Went Wrongs");
      }
      const data = await response.json();
      dispatch({ type: "SET_PRODUCTS", products: data });
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  let productList = <h1>List is Empty</h1>;

  if (loading)
    productList = (
      <h1 style={{ textAlign: "center", marginTop: "20vh" }}>Loading...</h1>
    );
  if (error)
    productList = (
      <h1 style={{ marginTop: "7rem", textAlign: "center" }}>Error</h1>
    );

  if (products.length > 0) {
    productList = (
      <ul>
        {products.map(product => {
          return (
            <li key={product.id}>
              <SingleProduct product={product} showCategory />
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div>
      <h2 style={{ marginTop: "8rem", textAlign: "center" }}>
        Our All Products
      </h2>
      <div className={classes.products}>{productList}</div>
    </div>
  );
};

export default AllProducts;
