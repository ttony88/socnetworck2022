import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import FrendsNavBar from "./FrendsNavBar/FrendsNavBar";

const Navbar = (props) => {

  const activeClass = ({isActive}) => (isActive ? styles.activeLink : styles.inactiveLink)


  return (
    <div className={styles.navBar}>
      <nav className={styles.nav}>
        <div className={styles.item}>
          <NavLink to="/profile" className={activeClass}>Profile</NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/dialogs" className={activeClass}>Massages</NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/music" className={activeClass}>Music</NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/news" className={activeClass}>News</NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/settings" className={activeClass}>Settings</NavLink>
        </div>
      </nav>
      <FrendsNavBar className="frends" navBar={props.navBar} />
    </div>
  );
};
export default Navbar;
 