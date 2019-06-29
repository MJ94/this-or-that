import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Login from './Login';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col><Login /></Col>
        </Row>
      </Container>
    );
  }
}
