import { Link } from 'react-router-dom';
import styles from '../NotFoundView/NotFoundView.module.css';

// eslint-disable-next-line
export default NotFoundPage => {
  return (
    <h1 className={styles.title}>
      Find best videos in
      <Link className={styles.link} to="/">
        Trends
      </Link>
      :)
    </h1>
  );
};
