import Spinner from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Loader = () => {
  return (
    <div className="Loader">
      <Spinner type="ThreeDots" color="#00BFFF" height={150} width={150} />
    </div>
  );
};

export default Loader;
