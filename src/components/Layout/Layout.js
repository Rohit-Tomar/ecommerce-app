import { Fragment } from "react";
import Toolbar from "./Toolbar/Toolbar";

const Layout = props => {
  return (
    <Fragment>
      <Toolbar />
      {props.children}
    </Fragment>
  );
};

export default Layout;
