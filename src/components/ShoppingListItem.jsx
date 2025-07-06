import classes from "./ShoppingListItem.module.css";

export const ShoppingListItem = (props) => {
  return (
    <div className="flex items-center p-2">
      <input
        type="checkbox"
        className="mr-2"
        checked={props.checked}
        onChange={props.toggleChecked}
      />
      <h3
        className="flex-1"
        style={{ textDecoration: props.checked ? "line-through" : "none" }}
      >
        {props.item}
      </h3>
      <button className={classes.removeButton} onClick={props.removeItem}>
        x
      </button>
    </div>
  );
};
