import { GET_QUESTIONS, SAVE_QUESTION, SAVE_ANSWER } from '../actions/questions';

const questions = (state = {}, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case SAVE_QUESTION:
      return {
        ...state,
        ...action.questions,
      };
    case SAVE_ANSWER:
      return {
        ...state,
        ...action.questions,
      };
    default:
      break;
  }
};

export default questions;
