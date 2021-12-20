import React from 'react';
import Spinner from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from '../Loader/Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Spinner type="BallTriangle" color="#005eaa" height={100} width={100} />
    </div>
  );
};

export default Loader;
