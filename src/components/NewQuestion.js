import React, { Component } from 'react';
import { Card, CardBody, CardTitle, FormGroup, Label, Input, Form, Button } from 'reactstrap';

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
  }

  handleOptionOneChange = (e) => {
    e.preventDefault();
    this.setState({
      optionOne: e.target.value,
    });
  }

  handleOptionTwoChange = (e) => {
    e.preventDefault();
    this.setState({
      optionTwo: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    const { optionOne, optionTwo } = this.state;
    return (
      <Card>
        <CardBody>
          <CardTitle>Would you rather...?</CardTitle>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="optionOne">Option One</Label>
              <Input
                type="text"
                value={optionOne}
                onChange={this.handleOptionOneChange}
                placeholder="Type option one here"
              />
            </FormGroup>
            <FormGroup>
              <Label for="optionTwo">Option Two</Label>
              <Input
                type="text"
                name="optionTwo"
                value={optionTwo}
                onChange={this.handleOptionTwoChange}
                placeholder="Type option two here"
              />
            </FormGroup>
            <Button disabled={optionOne === '' || optionTwo === ''}>Submit</Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default NewQuestion;
