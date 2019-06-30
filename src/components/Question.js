import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, CardBody, CardTitle } from 'reactstrap';

const Question = (props) => {
  const { question } = props;
  return (
    <Card>
      <CardBody>
        <CardTitle>Would you pick This or That?</CardTitle>
        <ul>
          <li>{question.optionOne.text}</li>
          <li>{question.optionTwo.text}</li>
        </ul>
      </CardBody>
    </Card>
  );
};

Question.propTypes = {
  id: PropTypes.string.isRequired,
  question: PropTypes.object.isRequired,
};

function mapStateToProps({ questions }, { id }) {
  return {
    question: questions[id],
  };
}

export default connect(mapStateToProps)(Question);
