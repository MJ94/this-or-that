import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Question from './Question';


class MainPage extends Component {
  state = {
    activeTab: '1',
  };

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    const { answeredQuestions, unansweredQuestions } = this.props;
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}>Unanswered Questions</NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}>Answered Questions</NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              {unansweredQuestions.map(qid => (
                <Col key={qid} sm="4">
                  <Question id={qid} />
                </Col>
              ))}
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              {answeredQuestions.map(qid => (
                <Col key={qid} sm="4">
                  <Question id={qid} />
                </Col>
              ))}
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

MainPage.propTypes = {
  answeredQuestions: PropTypes.array.isRequired,
  unansweredQuestions: PropTypes.array.isRequired,
};

const mapStateToProps = ({ questions, users, authedUser }) => {
  const user = users[authedUser];
  const answeredQuestions = Object.keys(user.answers);
  return {
    answeredQuestions,
    unansweredQuestions: Object.keys(questions).filter(qid => !answeredQuestions.includes(qid)),
  };
};

export default connect(mapStateToProps)(MainPage);
