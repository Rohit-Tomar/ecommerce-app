import { NavLink, useHistory } from "react-router-dom";

import classes from "./Toolbar.module.css";

const Toolbar = () => {
  const history = useHistory();

  const homeClickHandler = () => {
    history.push("/");
  };

  return (
    <div className={classes.toolbar}>
      <div>MENU</div>
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
        </ul>
      </nav>
    </div>
  );
};

export default Toolbar;
