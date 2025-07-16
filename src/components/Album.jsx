import classes from "./Album.module.css";

export const Album = (props) => {
  return (
    <div className={classes.container} onClick={props.onClick}>
      <h2>Title: {props.title}</h2>
    </div>
  );
};
