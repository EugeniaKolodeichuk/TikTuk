import { Link } from 'react-router-dom';
import styles from '../NotFoundView/NotFoundView.module.css';

// eslint-disable-next-line
export default NotFoundPage => {
  return (
    <h1 className={styles.title}>
      <Link className={styles.link} to="/">
        Find best videos in Trends :)
      </Link>
    </h1>
  );
};
