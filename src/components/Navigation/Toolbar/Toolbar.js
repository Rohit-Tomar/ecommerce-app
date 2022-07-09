import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";

import classes from "./Toolbar.module.css";
import SideBar from "../SideBar/SideBar";
import DrawerToggle from "../SideBar/DrawerToggle/DrawerToggle";

const Toolbar = props => {
  const history = useHistory();
  const dispatch = useDispatch();

  const homeClickHandler = () => {
    history.push("/");
  };

  return (
    <div className={classes.toolbar}>
      <DrawerToggle toggleSideDrawer={props.toggleSideDrawer} />
      <div onClick={homeClickHandler} className={classes.home}>
        Home
      </div>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/electronics">
              Electronics
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/jewelery">
              Jewelery
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/menClothing">
              Men's Clothing
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/womenClothing">
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
