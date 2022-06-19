import { Route, Switch } from "react-router-dom";

import AllProducts from "./components/AllProducts/AllProducts";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Layout from "./components/Layout/Layout";

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
      </Switch>
    </Layout>
  );
};

export default App;
