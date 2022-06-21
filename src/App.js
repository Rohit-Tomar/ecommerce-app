import { Route, Switch } from "react-router-dom";

import AllProducts from "./components/Product/AllProducts/AllProducts";
import ProductDetail from "./components/Product/ProductDetail/ProductDetail";
import WomenClothing from "./components/CategoryPage/WomenClothing";
import Layout from "./components/Layout/Layout";
import MenClothing from "./components/CategoryPage/MenClothing";
import Jewelery from "./components/CategoryPage/Jewelery";
import Electronics from "./components/CategoryPage/Electronics";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllProducts />
        </Route>
        <Route path="/product/:productId">
          <ProductDetail />
        </Route>
        <Route path="/womenClothing">
          <WomenClothing />
        </Route>
        <Route path="/menClothing">
          <MenClothing />
        </Route>
        <Route path="/jewelery">
          <Jewelery />
        </Route>
        <Route path="/electronics">
          <Electronics />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;

// https://fakestoreapi.com
