import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import FrendsNavBarContainer from "./FrendsNavBarContainer/FrendsNavBarContainer";

const Navbar = () => {

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
          <NavLink to="/users" className={activeClass}>Users</NavLink>
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
      <FrendsNavBarContainer />
    </div>
  );
};
export default Navbar;
 