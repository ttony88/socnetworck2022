import { NavLink } from "react-router-dom";
import styles from "./Dialog.module.css";

const Dialog = (props) => {
  const path = "/dialogs/" + props.id;

  return (
    <div>
      <NavLink to={path} className={styles.dialog}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default Dialog;
