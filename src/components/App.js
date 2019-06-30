import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoadingBar from 'react-redux-loading-bar';
import { Container } from 'reactstrap';
import { handleInitialData } from '../actions/shared';
import Login from './Login';
import NavBar from './NavBar';
import MainPage from './MainPage';
import QuestionDetails from './QuestionDetails';
import Leaderboard from './Leaderboard';
import NewQuestion from './NewQuestion';
import NotFound from './NotFound';


class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    const { notLoggedIn } = this.props;

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <NavBar />
          <Container>
            <Switch>
              {
                notLoggedIn ? <Route path="/" exact component={Login} />
                  : (
                    <Fragment>
                      <Route path="/" exact component={MainPage} />
                      <Route path="/questions/:id" component={QuestionDetails} />
                      <Route path="/add" component={NewQuestion} />
                      <Route path="/leaderboard" component={Leaderboard} />
                    </Fragment>
                  )
              }
              <Route component={NotFound} />
            </Switch>
          </Container>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({
  notLoggedIn: authedUser === null,
});

const mapDispatchToProps = dispatch => ({
  handleInitialData: () => {
    dispatch(handleInitialData());
  },
});


App.propTypes = {
  handleInitialData: PropTypes.func.isRequired,
  notLoggedIn: PropTypes.bool.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
