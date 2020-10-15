import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <ul className="nav">
    <li>
      <Link to={ROUTES.HOME}>POKEDEX</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>CATEGORIES</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>TOURNAMENTS</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>GYMS</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>RANKING</Link>
    </li>
  </ul>
);

export default Navigation;
