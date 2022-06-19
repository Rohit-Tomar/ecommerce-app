import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

import classes from "./ProductDetail.module.css";

const ProductDetail = props => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);

  const params = useParams();
  const { productId } = params;

  const fetchProduct = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/" + productId
      );
      if (!response.ok) {
        throw new Error("Not able to fetch this Product");
      }
      const data = await response.json();
      console.log(data);
      setProduct(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }, [productId]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  if (loading) {
    return (
      <h1 style={{ textAlign: "center", marginTop: "50vh" }}>Loading...!</h1>
    );
  }

  if (error) {
    return (
      <h1 style={{ textAlign: "center", marginTop: "50vh", color: "red" }}>
        Unable to Load the Product...!
      </h1>
    );
  }

  if (product) {
    return (
      <div className={classes.product}>
        <h1>Product details</h1>
        <div className={classes.container}>
          <div className={classes.imageDiv}>
            <img src={product.image} />
          </div>
          <div className={classes.details}>
            <div className={classes.category}>
              <span>Category: </span>
              {product.category}
            </div>

            <div className={classes.price}>Price: ₹{product.price}</div>
            <div className={classes.title}>
              <i>{product.title}</i>
            </div>
            <div className={classes.description}>{product.description}</div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductDetail;
