import classes from "./Backdrop.module.css";

const Backdrop = props => {
  return props.show ? (
    <div onClick={props.close} className={classes.backdrop}></div>
  ) : null;
};

export default Backdrop;
