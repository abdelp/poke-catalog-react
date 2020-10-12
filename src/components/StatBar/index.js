import React from 'react';
import cx from 'classnames';

const StatBar = ({ className }) => {
  const children = [];
  for (let i = 0; i < 15; i += 1) {
    children.push(<li>1</li>);
  }

  return (
    <ul>
      { children }
    </ul>
  );
};

export default StatBar;
