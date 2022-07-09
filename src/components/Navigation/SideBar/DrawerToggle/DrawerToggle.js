import classes from "./DrawerToggle.module.css";

const DrawerToggle = props => {
  return (
    <div className={classes.drawerToggle} onClick={props.toggleSideDrawer}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DrawerToggle;
