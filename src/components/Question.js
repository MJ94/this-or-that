import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { withRouter } from 'react-router-dom';

const Question = (props) => {
  const loadDetails = (e, id) => {
    e.preventDefault();
    props.history.push(`/questions/${id}`);
  };

  const { question } = props;
  return (
    <Card onClick={e => loadDetails(e, question.id)}>
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
  history: PropTypes.object.isRequired,
};

function mapStateToProps({ questions }, { id }) {
  return {
    question: questions[id],
  };
}

export default withRouter(connect(mapStateToProps)(Question));
