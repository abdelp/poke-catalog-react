import React from 'react';
import PropTypes from 'prop-types';

const StatBar = ({ className }) => {
  const children = [];
  for (let i = 0; i < 15; i += 1) {
    children.push(<li>1</li>);
  }

  return (
    <ul className={className}>
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
