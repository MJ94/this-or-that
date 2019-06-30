import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class QuestionDetails extends Component {
  render() {
    const { question } = this.props;

    if (!question) {
      return <Redirect to="/NotFound" />;
    }

    return (
      <div>Question Details</div>
    );
  }
}

const mapStateToProps = ({ questions }, props) => {
  const { id } = props.match.params;
  const question = questions[id];
  return {
    question,
  };
};

QuestionDetails.propTypes = {
  question: PropTypes.object,
};

export default connect(mapStateToProps)(QuestionDetails);
