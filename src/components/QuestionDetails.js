import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, CardHeader, CardBody, CardTitle, FormGroup, Label, Input, Form, Button } from 'reactstrap';
import { handleSaveAnswer } from '../actions/shared';
import User from './User';

class QuestionDetails extends Component {
  state = {
    selectedAnswer: '',
  }

  radioSelected = (e) => {
    this.setState({
      selectedAnswer: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.saveAnswer(this.state.selectedAnswer);
  }

  render() {
    const { question, questionAuthor, authedUser } = this.props;

    if (!question) {
      return <Redirect to="/404" />;
    }

    return (
      <Card>
        <CardHeader>
          <User id={questionAuthor.id} />
        </CardHeader>
        <CardBody>
          <CardTitle>This Or That?</CardTitle>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup tag="fieldset">
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" value="optionOne" checked onChange={this.radioSelected} />
                  {' '}
                  {question.optionOne.text}
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" value="optionTwo" onChange={this.radioSelected} />
                  {' '}
                  {question.optionTwo.text}
                </Label>
              </FormGroup>
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

QuestionDetails.propTypes = {
  question: PropTypes.object,
  questionAuthor: PropTypes.object,
  authedUser: PropTypes.string.isRequired,
  saveAnswer: PropTypes.func.isRequired,
};

const mapStateToProps = ({ questions, users, authedUser }, props) => {
  const { id } = props.match.params;
  const question = questions[id];
  const questionAuthor = users[question.author];
  return {
    question,
    questionAuthor,
    authedUser,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  const { id } = props.match.params;
  return {
    saveAnswer: (answer) => {
      dispatch(handleSaveAnswer(id, answer));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetails);
