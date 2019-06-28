import React, { Component } from 'react';
// eslint-disable-next-line object-curly-newline
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

export default class Login extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="selectUser">Select User</Label>
          <Input type="select" name="select" id="selectUser">
            <option>Dummy data 1</option>
            <option>Dummy data 2</option>
            <option>Dummy data 3</option>
            <option>Dummy data 4</option>
            <option>Dummy data 5</option>
          </Input>
        </FormGroup>
        <Button>Login</Button>
      </Form>
    );
  }
}
