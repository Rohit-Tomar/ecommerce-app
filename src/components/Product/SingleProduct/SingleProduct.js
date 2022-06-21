import { Link } from "react-router-dom";
import classes from "./SingleProduct.module.css";

const SingleProduct = props => {
  const { title, price, image, category, id } = props.product;
  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <Link to={`/product/${id}`}>
          <img src={image} alt="myImage" />
        </Link>
      </div>
      <div className={classes.details}>
        {props.showCategory && (
          <div className={classes.category}>{category}</div>
        )}
        <div className={classes.description}>
          <p>{title.substring(0, 10)}</p>
          <h4>{price}</h4>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
