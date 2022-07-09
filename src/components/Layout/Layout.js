import { Fragment, useState } from "react";

import SideBar from "../Navigation/SideBar/SideBar";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = props => {
  const [showSideDrawer, setShowSideDrawer] = useState(true);

  const closeSideDrawerHandler = () => {
    setShowSideDrawer(false);
  };

  const toggleSideDrawer = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  return (
    <Fragment>
      <Toolbar toggleSideDrawer={toggleSideDrawer} />
      <SideBar showSideDrawer={showSideDrawer} close={closeSideDrawerHandler} />
      {props.children}
    </Fragment>
  );
};

export default Layout;
