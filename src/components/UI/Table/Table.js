import { useSelector, useDispatch } from "react-redux";
import classes from "./Table.module.css";
import { FaTrash } from "react-icons/fa"; // using react-icons
import { Link } from "react-router-dom";

const Table = props => {
  const cartProducts = useSelector(state => state.cartReducer);
  const allProducts = useSelector(state => state.productReducer.allProducts);
  const dispatch = useDispatch();

  const products = [];
  let finalAmount = 0;

  for (let product of allProducts) {
    const index = cartProducts.findIndex(p => p.id === product.id);
    if (index !== -1) {
      const quantity = cartProducts[index].quantity;
      const totalPrice = quantity * product.price;
      finalAmount += totalPrice;
      products.push({ ...product, quantity: quantity, totalPrice: totalPrice });
    }
  }

  const dispatchHandler = (type, productId) => {
    dispatch({ type: type, id: productId });
  };

  if (products.length === 0) {
    return <h1 className={classes.empty}>Cart is Empty</h1>;
  }

  return (
    <div className={classes.table}>
      <table>
        <tr>
          <th>PRODUCTS</th>
          <th>NAME OF PRODUCT</th>
          <th>PRICE</th>
          <th>QUANTITY</th>
          <th>REMOVE</th>
          <th>TOTAL</th>
        </tr>
        {products.map(product => {
          return (
            <tr key={product.id} className={classes.row}>
              <td>
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} />
                </Link>
              </td>
              <td>{product.title.substring(0, 10)}</td>
              <td>
                <strong>₹{product.price.toFixed(2)}</strong>
              </td>
              <td>
                <div className={classes.quantity}>
                  <div
                    onClick={() => dispatchHandler("ADD_PRODUCT", product.id)}
                    className={classes.quantity_control}
                  >
                    +
                  </div>
                  <div className={classes.quantity_value}>
                    {product.quantity}
                  </div>
                  <div
                    onClick={() =>
                      dispatchHandler("REMOVE_PRODUCT", product.id)
                    }
                    className={classes.quantity_control}
                  >
                    -
                  </div>
                </div>
              </td>
              <td>
                <FaTrash
                  onClick={() => dispatchHandler("DELETE_PRODUCT", product.id)}
                  className={classes.trash}
                />
              </td>
              <td>
                <strong>₹{product.totalPrice.toFixed(2)}</strong>
              </td>
            </tr>
          );
        })}
      </table>
      <div>
        <h2 className={classes.totalPrice}>
          Total Price: {finalAmount.toFixed(2)}
        </h2>
        <button
          className={classes.clearBtn}
          onClick={() => dispatch({ type: "CLEAR" })}
        >
          CLEAR CART
        </button>
      </div>
    </div>
  );
};

export default Table;
