/** @format */

import './Spinner.css';

const Spinner = () => {
  return (
    <div className="spinner-div">
      <div className="loader"></div>
      <p className="fetch-p">Your data is on the way <span className="loading-icon">☺</span></p>
    </div>
  );
};

export default Spinner;
