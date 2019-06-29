import { showLoading, hideLoading } from 'react-redux-loading';
import { _getUsers, _getQuestions, _saveQuestionAnswer } from '../utils/_DATA';
import { receiveUsers, addUserAnswer } from './users';
import { getQuestions, saveAnswer } from './questions';

export const handleInitialData = () => (dispatch) => {
  dispatch(showLoading());
  return Promise.all([_getUsers, _getQuestions()])
    .then(([users, questions]) => {
      dispatch(receiveUsers(users));
      dispatch(getQuestions(questions));
      dispatch(hideLoading());
    });
};

export const handleSaveAnswer = (qid, answer) => (dispatch, getState) => {
  const { authedUser } = getState();

  dispatch(showLoading());
  return _saveQuestionAnswer({
    authedUser,
    qid,
    answer,
  })
    .then(() => {
      dispatch(saveAnswer(authedUser, qid, answer));
      dispatch(addUserAnswer(authedUser, qid, answer));
    })
    .then(() => dispatch(hideLoading()));
};
