import React, { Component, Fragment } from 'react';
import NavBar from './NavBar';

class MainPage extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <div>Main Page</div>
      </Fragment>
    );
  }
}

export default MainPage;
