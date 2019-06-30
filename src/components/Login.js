import React, { Component } from 'react';
// eslint-disable-next-line object-curly-newline
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAuthedUser } from '../actions/authedUser';


class Login extends Component {
  state = {
    userId: '',
  }

  onUserChange = (userId) => { this.setState({ userId }); }

  onLogin = () => {
    const { userId } = this.state;
    const { setAuthedUser } = this.props;
    if (userId) {
      setAuthedUser(userId);
    }
  }

  render() {
    const { users } = this.props;
    const { userId } = this.state;
    return (
      <Form>
        <FormGroup>
          <Label for="selectUser">Select User</Label>
          <Input type="select" name="select" value={userId} id="selectUser" onChange={event => this.onUserChange(event.target.value)}>
            <option value="" disabled>Pick a user</option>
            {
              Object.keys(users).map(user => (
                <option key={user} value={user}>
                  {users[user].name}
                </option>
              ))
            }
          </Input>
        </FormGroup>
        <Button onClick={this.onLogin} disabled={!userId}>Login</Button>
      </Form>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setAuthedUser: (id) => {
      dispatch(setAuthedUser(id));
    },
  };
}

Login.propTypes = {
  users: PropTypes.object.isRequired,
  setAuthedUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
