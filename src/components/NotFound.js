import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => (
  <Fragment>
    <h3>Oops! We have a 404.</h3>
    <NavLink to="/">Click here</NavLink>
    {' '}
        to go to the main page. Are you logged in?
  </Fragment>
);

export default NotFound;
