/** @format */

import './Spinner.css';

const Spinner = () => {
  return (
    <div className="spinner-div">
      <div className="loader"></div>
      <p className="fetch-p">Fetching data...</p>
    </div>
  );
};

export default Spinner;
