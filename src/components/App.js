import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoadingBar from 'react-redux-loading-bar';
import { Container } from 'reactstrap';
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
    const { notLoggedIn } = this.props;

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <NavBar />
          <Container>
            {
              notLoggedIn ? <Route path="/" component={Login} />
                : (
                  <div>
                    <Route path="/" exact component={MainPage} />
                    <Route path="/questions/:id" component={PollDetails} />
                    <Route path="/add" component={NewPoll} />
                    <Route path="/leaderboard" component={Leaderboard} />
                  </div>
                )
            }
          </Container>
        </Fragment>
      </Router>
    );
  }
}


function mapStateToProps({ authedUser }) {
  return {
    notLoggedIn: authedUser === null,
  };
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  notLoggedIn: PropTypes.bool.isRequired,
};


export default connect(mapStateToProps)(App);
