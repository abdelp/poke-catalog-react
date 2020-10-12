import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <ul>
    <li>
      <Link to={ROUTES.HOME}>HOME</Link>
      <Link to={ROUTES.HOME}>CATEGORIES</Link>
      <Link to={ROUTES.HOME}>SERVICES</Link>
      <Link to={ROUTES.HOME}>SUPPORT</Link>
      <Link to={ROUTES.HOME}>CONTACT</Link>
    </li>
  </ul>
);

export default Navigation;
