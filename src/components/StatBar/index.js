import React from 'react';
import PropTypes from 'prop-types';

const StatBar = () => {
  const children = [];
  for (let i = 0; i < 15; i += 1) {
    children.push(<li></li>);
  }

  return (
    <ul className='stat-bar'>
      { children }
    </ul>
  );
};

StatBar.propTypes = {
  className: PropTypes.string,
};

StatBar.defaultProps = {
  className: '',
};

export default StatBar;
