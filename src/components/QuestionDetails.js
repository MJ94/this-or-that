import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, CardHeader, CardBody, CardTitle, FormGroup, Label, Input, Form, Button } from 'reactstrap';
import { FaCheck } from 'react-icons/fa';
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
    const { question, questionAuthor, isAnswered, isOptionOneAnswered } = this.props;

    if (!question) {
      return <Redirect to="/NotFound" />;
    }

    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const percentageOptionOne = (optionOneVotes / (optionOneVotes + optionTwoVotes) * 100).toFixed(2);
    const percentageOptionTwo = (optionTwoVotes / (optionOneVotes + optionTwoVotes) * 100).toFixed(2);

    const checkmark = <FaCheck size="20" color="green" />;

    return (
      <Card>
        <CardHeader>
          <User id={questionAuthor.id} />
        </CardHeader>
        <CardBody>
          <CardTitle>Would you rather...?</CardTitle>
          {isAnswered
            ? (
              <ul>
              <li>{question.optionOne.text} ({optionOneVotes} vote(s) at {percentageOptionOne}%){isOptionOneAnswered ? checkmark : null}</li>
              <li>{question.optionTwo.text} ({optionTwoVotes} vote(s) at {percentageOptionTwo}%){!isOptionOneAnswered ? checkmark : null}</li>
              </ul>
            ) : (
            <Form onSubmit={this.handleSubmit}>
              <FormGroup tag="fieldset">
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" value="optionOne" onChange={this.radioSelected} />{' '}
                    {question.optionOne.text}
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" value="optionTwo" onChange={this.radioSelected} />{' '}
                    {question.optionTwo.text}
                  </Label>
                </FormGroup>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
            )}
        </CardBody>
      </Card>
    );
  }
}

QuestionDetails.propTypes = {
  question: PropTypes.object,
  questionAuthor: PropTypes.object,
  isAnswered: PropTypes.bool.isRequired,
  saveAnswer: PropTypes.func.isRequired,
  isOptionOneAnswered: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ questions, users, authedUser }, props) => {
  const { id } = props.match.params;
  const question = questions[id];
  const questionAuthor = users[question.author];
  const isOptionOneAnswered = question.optionOne.votes.includes(authedUser);
  const isOptionTwoAnswered = question.optionTwo.votes.includes(authedUser);
  const isAnswered = isOptionOneAnswered || isOptionTwoAnswered;
  return {
    question,
    questionAuthor,
    isAnswered,
    isOptionOneAnswered,
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
