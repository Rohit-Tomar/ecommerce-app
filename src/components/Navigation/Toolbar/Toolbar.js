import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";

import classes from "./Toolbar.module.css";
import SideBar from "../SideBar/SideBar";

const Toolbar = () => {
  const [showSideDrawer, setShowSideDrawer] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();

  const homeClickHandler = () => {
    history.push("/");
  };

  const clickHandler = selectedCategory => {
    dispatch({ type: "SET_CATEGORY", category: selectedCategory });
  };

  const closeSideDrawerHandler = () => {
    setShowSideDrawer(false);
  };

  return (
    <div className={classes.toolbar}>
      <div>MENU</div>
      <SideBar showSideDrawer={showSideDrawer} close={closeSideDrawerHandler} />
      <div onClick={homeClickHandler} className={classes.home}>
        Home
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              onClick={() => clickHandler("electronics")}
              activeClassName={classes.active}
              to="/electronics"
            >
              Electronics
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => clickHandler("jewelery")}
              activeClassName={classes.active}
              to="/jewelery"
            >
              Jewelery
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => clickHandler("menClothing")}
              activeClassName={classes.active}
              to="/menClothing"
            >
              Men's Clothing
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => clickHandler("womenClothing")}
              activeClassName={classes.active}
              to="/womenClothing"
            >
              Women's Clothing
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/cart">
              My Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Toolbar;
