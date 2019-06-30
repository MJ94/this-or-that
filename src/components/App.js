import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoadingBar from 'react-redux-loading-bar';
import { handleInitialData } from '../actions/shared';
import Login from './Login';
import NavBar from './NavBar';
import MainPage from './MainPage';
import PollDetails from './PollDetails';
import Leaderboard from './Leaderboard';
import NewPoll from './NewPoll';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Fragment>
        <NavBar />
        <Login />
      </Fragment>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(App);
