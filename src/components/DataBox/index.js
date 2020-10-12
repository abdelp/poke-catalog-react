import React from 'react';
import PropTypes from 'prop-types';

const DataBox = ({ height, weight }) => (
  <div className="data-box">
    <div>
      <h3>Height</h3>
      <p>{height}</p>
    </div>
    <div>
      <h3>Weight</h3>
      <p>{weight}</p>
    </div>
  </div>
);

DataBox.propTypes = {
  height: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
};

export default DataBox;
