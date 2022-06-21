import Backdrop from "../../UI/Backdrop/Backdrop";

import classes from "./SideBar.module.css";

const SideBar = props => {
  //   console.log("SideBar [showSideDrawer]:", props.showSideDrawer);
  return (
    <div>
      <Backdrop close={props.close} show={props.showSideDrawer} />
      <div></div>
    </div>
  );
};

export default SideBar;
