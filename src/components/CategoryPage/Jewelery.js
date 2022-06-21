import { useSelector } from "react-redux";

import classes from "./Category.module.css";
import SingleProduct from "../Product/SingleProduct/SingleProduct";

const Jewelery = () => {
  const allProducts = useSelector(store => store.productReducer.allProducts);
  let filteredProducts = [];
  if (allProducts) {
    filteredProducts = allProducts.filter(
      product => product.category === "jewelery"
    );
  }
  let productList = null;
  if (filteredProducts.length > 0) {
    productList = (
      <ul>
        {filteredProducts.map(product => {
          return (
            <li key={product.id}>
              <SingleProduct product={product} />
            </li>
          );
        })}
      </ul>
    );
  }

  if (productList) {
    return (
      <div>
        <h2 style={{ marginTop: "7rem", textAlign: "center" }}>
          Jewelery Products
        </h2>
        <div className={classes.products}>{productList}</div>
      </div>
    );
  } else
    return (
      <h1 style={{ textAlign: "center", marginTop: "50vh" }}>Loading...</h1>
    );
};

export default Jewelery;
