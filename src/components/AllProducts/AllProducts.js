import { useCallback } from "react";
import { useState, useEffect } from "react";

import classes from "./AllProducts.module.css";
import SingleProduct from "../SingleProduct/SingleProduct";

const AllProducts = props => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Something Went Wrongs");
      }
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  let productList = <h1>List is Empty</h1>;

  if (loading)
    productList = (
      <h1 style={{ textAlign: "center", marginTop: "50vh" }}>Loading...</h1>
    );
  if (error) productList = <h1>Error</h1>;

  if (products.length > 0) {
    productList = (
      <ul>
        {products.map(product => {
          return (
            <li key={product.id}>
              <SingleProduct product={product} />
            </li>
          );
        })}
      </ul>
    );
  }

  return <div className={classes.products}>{productList}</div>;
};

export default AllProducts;
