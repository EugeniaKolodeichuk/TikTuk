import { NavLink } from 'react-router-dom';
import styles from '../Navigation/Navigation.module.css';

const Navigation = () => (
  <nav className={styles.navigation}>
    <NavLink
      exact
      to="/"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Trends
    </NavLink>
    <NavLink
      to="/profile"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Profile
    </NavLink>
  </nav>
);

export default Navigation;
