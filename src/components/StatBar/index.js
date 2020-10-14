import React from 'react';

const StatBar = () => {
  const children = [];
  for (let i = 0; i < 15; i += 1) {
    children.push(<li key={`bar-${i}`} />);
  }

  return (
    <ul className="stat-bar">
      { children }
    </ul>
  );
};

export default StatBar;
