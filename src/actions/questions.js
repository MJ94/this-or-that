import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { _saveQuestion } from '../utils/_DATA';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const SAVE_QUESTION = 'SAVE_QUESTION';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';

export const getQuestions = questions => ({
  type: GET_QUESTIONS,
  questions,
});

export const saveQuestion = question => ({
  type: SAVE_QUESTION,
  question,
});

export const handleSaveQuestion = (optionOneText, optionTwoText) => (dispatch, getState) => {
  const { authedUser } = getState();

  dispatch(showLoading());

  return _saveQuestion({
    optionOneText,
    optionTwoText,
    author: authedUser,
  })
    .then(formattedData => dispatch(saveQuestion(formattedData)))
    .then(() => dispatch(hideLoading()));
};


export const saveAnswer = ({ authedUser, qid, answer }) => ({
  type: SAVE_QUESTION_ANSWER,
  authedUser,
  qid,
  answer,
});
