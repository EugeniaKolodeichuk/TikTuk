import Spinner from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Loader = () => {
  return (
    <div className="Loader">
      <Spinner type="BallTriangle" color="#005eaa" height={200} width={200} />
    </div>
  );
};

export default Loader;
