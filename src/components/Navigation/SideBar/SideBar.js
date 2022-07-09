import { NavLink } from "react-router-dom";

import classes from "./SideBar.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideBar = props => {
  return (
    <div>
      <Backdrop close={props.close} show={props.showSideDrawer} />
      {props.showSideDrawer && (
        <div className={classes.sideBar}>
          <nav>
            <ul>
              <li>
                <NavLink activeClassName={classes.active} to="/" exact>
                  Home
                </NavLink>
              </li>
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
      )}
    </div>
  );
};

export default SideBar;
