import React from 'react';

const DataBox = ({ height, weight }) =>  (
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

export default DataBox;
